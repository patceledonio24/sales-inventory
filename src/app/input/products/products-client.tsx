"use client";

import * as React from "react";
import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Chip,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Switch,
  Divider,
  Tooltip,
  Alert,
} from "@mui/material";

import PageShell, { SectionCard } from "@/components/ui/page-shell";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { createProduct, setProductActive, getProductsWithStock } from "./actions";

export type StoreRow = { id: string; name: string };

export type ProductRow = {
  id: string;
  name: string;
  sku: string | null;
  isActive: boolean;
  stock: number;
  asOfDateISO: string | null;
};

type SortMode = "NAME_ASC" | "STOCK_DESC" | "STOCK_ASC" | "STATUS";
type QuickFilter = "ALL" | "LOW" | "OUT";

function n(v: any) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

export default function ProductsClient({
  stores,
  initialStoreId,
  initialProducts,
  isStaff,
}: {
  stores: StoreRow[];
  initialStoreId: string;
  initialProducts: ProductRow[];
  isStaff: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isAdmin = !isStaff;

  const safeInitialStoreId = (initialStoreId ?? "").trim() || stores[0]?.id || "";
  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [products, setProducts] = useState<ProductRow[]>(Array.isArray(initialProducts) ? initialProducts : []);

  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [saving, setSaving] = useState(false);
  const [loadingStock, setLoadingStock] = useState(false);

  const [lowThreshold, setLowThreshold] = useState<number>(10);
  const [sortMode, setSortMode] = useState<SortMode>("NAME_ASC");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("ALL");

  const thresholdsText = useMemo(() => {
    const t = Number.isFinite(lowThreshold) ? Math.max(0, Math.floor(lowThreshold)) : 10;
    return `OK: > ${t}, LOW: 1–${t}, OUT: 0`;
  }, [lowThreshold]);

  function statusOf(qty: number) {
    const t = Number.isFinite(lowThreshold) ? Math.max(0, Math.floor(lowThreshold)) : 10;

    if (qty <= 0) {
      return {
        label: "OUT" as const,
        color: "error" as const,
        tooltip: `Out of stock (0). ${thresholdsText}`,
        isPulsing: true,
      };
    }
    if (qty <= t) {
      return {
        label: "LOW" as const,
        color: "warning" as const,
        tooltip: `Low stock (≤ ${t}). ${thresholdsText}`,
        isPulsing: false,
      };
    }
    return {
      label: "OK" as const,
      color: "success" as const,
      tooltip: `Sufficient stock (> ${t}). ${thresholdsText}`,
      isPulsing: false,
    };
  }

  const storeName = useMemo(
    () => stores.find((s) => s.id === storeId)?.name ?? "-",
    [stores, storeId]
  );

  const stats = useMemo(() => {
    let out = 0;
    let low = 0;
    for (const p of products) {
      const st = statusOf(n(p.stock));
      if (st.label === "OUT") out += 1;
      else if (st.label === "LOW") low += 1;
    }
    return { out, low };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, lowThreshold]);

  const normalizedQuery = useMemo(() => q.trim().toLowerCase(), [q]);

  const viewRows = useMemo(() => {
    let rows = products.filter((p) => {
      if (!normalizedQuery) return true;
      return (
        p.name.toLowerCase().includes(normalizedQuery) ||
        (p.sku ?? "").toLowerCase().includes(normalizedQuery)
      );
    });

    if (quickFilter !== "ALL") {
      rows = rows.filter((p) => statusOf(n(p.stock)).label === quickFilter);
    }

    const statusRank = (p: ProductRow) => {
      const st = statusOf(n(p.stock)).label;
      return st === "OUT" ? 0 : st === "LOW" ? 1 : 2;
    };

    rows = [...rows].sort((a, b) => {
      if (sortMode === "NAME_ASC") return a.name.localeCompare(b.name);
      if (sortMode === "STOCK_DESC") return n(b.stock) - n(a.stock);
      if (sortMode === "STOCK_ASC") return n(a.stock) - n(b.stock);

      const ra = statusRank(a);
      const rb = statusRank(b);
      if (ra !== rb) return ra - rb;
      return a.name.localeCompare(b.name);
    });

    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, normalizedQuery, quickFilter, sortMode, lowThreshold]);

  async function refreshForStore(nextStoreId: string) {
    setLoadingStock(true);
    try {
      const rows = await getProductsWithStock({ storeId: nextStoreId });
      setProducts(Array.isArray(rows) ? (rows as ProductRow[]) : []);
    } finally {
      setLoadingStock(false);
    }
  }

  function onChangeStore(nextStoreId: string) {
    const v = (nextStoreId ?? "").toString();
    setStoreId(v);
    setQuickFilter("ALL");
    setQ("");
    startTransition(async () => {
      await refreshForStore(v);
      router.refresh();
    });
  }

  async function onAdd() {
    if (!isAdmin) return;

    const nm = name.trim();
    const sk = sku.trim() || null;
    if (!nm) return;

    setSaving(true);
    try {
      const res = await createProduct({ name: nm, sku: sk });
      const created = (res as any)?.product;
      if (!created?.id) throw new Error("CREATE_FAILED");

      setProducts((prev) => [
        {
          id: created.id,
          name: created.name,
          sku: created.sku,
          isActive: created.isActive,
          stock: 0,
          asOfDateISO: null,
        },
        ...prev,
      ]);

      setName("");
      setSku("");
    } finally {
      setSaving(false);
    }
  }

  async function onToggleActive(productId: string, next: boolean) {
    if (!isAdmin) return;

    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, isActive: next } : p)));

    try {
      await setProductActive({ productId, isActive: next });
    } catch {
      setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, isActive: !next } : p)));
    }
  }

  const showBanner = stats.low > 0 || stats.out > 0;

  return (
    <>
      <PageShell
        title="Products"
        subtitle="Add products and manage Active/Inactive status. View current stock per store (latest inventory entry)."
        headerLeft={
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 42 }}>
              Store
            </Typography>
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <Select
                value={storeId}
                onChange={(e) => onChangeStore(String(e.target.value))}
                displayEmpty
                disabled={isPending || stores.length === 0}
              >
                {stores.length === 0 ? (
                  <MenuItem value="">
                    <em>No stores</em>
                  </MenuItem>
                ) : (
                  stores.map((s) => (
                    <MenuItem key={s.id} value={s.id}>
                      {s.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>

            {loadingStock && (
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                Loading…
              </Typography>
            )}
          </Stack>
        }
        headerRight={
          <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="flex-end">
            <Chip
              size="small"
              label={`Store: ${storeName}`}
              variant="outlined"
              sx={(theme) => ({
                borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.18)" : theme.palette.divider,
                color: theme.palette.text.secondary,
              })}
            />

            {!!stats.out && (
              <Chip
                size="small"
                label={`OUT (${stats.out})`}
                color="error"
                variant={quickFilter === "OUT" ? "filled" : "outlined"}
                onClick={() => setQuickFilter(quickFilter === "OUT" ? "ALL" : "OUT")}
                sx={{ fontWeight: 900 }}
              />
            )}
            {!!stats.low && (
              <Chip
                size="small"
                label={`LOW (${stats.low})`}
                color="warning"
                variant={quickFilter === "LOW" ? "filled" : "outlined"}
                onClick={() => setQuickFilter(quickFilter === "LOW" ? "ALL" : "LOW")}
                sx={{ fontWeight: 900 }}
              />
            )}

            {(stats.low > 0 || stats.out > 0) && (
              <Button
                variant="outlined"
                onClick={() => setQuickFilter("ALL")}
                disabled={quickFilter === "ALL"}
                sx={{ borderRadius: 2, minWidth: 110 }}
              >
                Show All
              </Button>
            )}
          </Stack>
        }
      >
        {showBanner && (
          <Alert
            severity={stats.out > 0 ? "error" : "warning"}
            sx={{
              mb: 2,
              borderRadius: 2,
              "& .MuiAlert-message": { width: "100%" },
            }}
          >
            {stats.out > 0
              ? `${stats.out} product(s) are OUT of stock`
              : "No OUT of stock items"}
            {stats.low > 0 ? ` and ${stats.low} product(s) are LOW on stock` : ""}
            {`. Threshold: LOW ≤ ${Math.max(0, Math.floor(lowThreshold))}.`}
          </Alert>
        )}

        <SectionCard title="Product Controls" tip="Tip: Use the banner buttons to focus on LOW/OUT products.">
          <Stack spacing={2}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              alignItems={{ xs: "stretch", md: "center" }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 102 }}>
                  LOW threshold
                </Typography>
                <TextField
                  value={String(lowThreshold)}
                  onChange={(e) => setLowThreshold(Math.max(0, Math.floor(n(e.target.value))))}
                  size="small"
                  inputProps={{ inputMode: "numeric" }}
                  sx={{ width: 120 }}
                />
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 36 }}>
                  Sort
                </Typography>
                <FormControl size="small" sx={{ minWidth: 220 }}>
                  <Select value={sortMode} onChange={(e) => setSortMode(e.target.value as SortMode)}>
                    <MenuItem value="NAME_ASC">Name (A → Z)</MenuItem>
                    <MenuItem value="STATUS">Status (OUT → LOW → OK)</MenuItem>
                    <MenuItem value="STOCK_DESC">Stock (High → Low)</MenuItem>
                    <MenuItem value="STOCK_ASC">Stock (Low → High)</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Typography variant="body2" color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
                Stock is based on the latest saved inventory entry for the selected store.
              </Typography>
            </Stack>

            <Divider sx={{ opacity: 0.6 }} />

            {isAdmin && (
              <>
                <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                  Add product
                </Typography>

                <Stack direction={{ xs: "column", md: "row" }} spacing={1.25} alignItems="stretch">
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product name"
                    size="small"
                    fullWidth
                    disabled={isPending || saving}
                  />
                  <TextField
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="SKU (optional)"
                    size="small"
                    sx={{ width: { xs: "100%", md: 220 } }}
                    disabled={isPending || saving}
                  />
                  <Button
                    variant="contained"
                    onClick={onAdd}
                    disabled={isPending || saving || !name.trim()}
                    sx={{ borderRadius: 2, minWidth: 140 }}
                  >
                    {saving ? "Adding..." : "Add"}
                  </Button>
                </Stack>

                <Divider sx={{ opacity: 0.6 }} />
              </>
            )}

            <Stack direction={{ xs: "column", md: "row" }} spacing={1.25} alignItems="center">
              <TextField
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
                size="small"
                fullWidth
                disabled={isPending}
              />
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                {viewRows.length} item(s)
              </Typography>
            </Stack>
          </Stack>
        </SectionCard>

        <SectionCard title="Product List" tip="Tip: LOW/OUT status is computed from the latest stock.">
          <ResponsiveTable minWidth={980}>
            <Table size="small" sx={{ minWidth: "inherit" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 220 }}>SKU</TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 120 }} align="right">
                    Stock
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }} align="center">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }}>As of</TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }}>Active</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {viewRows.map((p) => {
                  const st = statusOf(n(p.stock));

                  return (
                    <TableRow key={p.id} hover>
                      <TableCell sx={{ fontWeight: 650 }}>{p.name}</TableCell>
                      <TableCell>{p.sku ?? "-"}</TableCell>
                      <TableCell align="right" sx={{ fontVariantNumeric: "tabular-nums" }}>
                        {n(p.stock)}
                      </TableCell>

                      <TableCell align="center">
                        <Tooltip title={st.tooltip} arrow>
                          <Chip
                            label={st.label}
                            color={st.color}
                            size="small"
                            sx={{
                              fontWeight: 900,
                              ...(st.isPulsing
                                ? {
                                    "@keyframes pulseOut": {
                                      "0%": { transform: "scale(1)", opacity: 1 },
                                      "50%": { transform: "scale(1.05)", opacity: 0.75 },
                                      "100%": { transform: "scale(1)", opacity: 1 },
                                    },
                                    animation: "pulseOut 1.1s ease-in-out infinite",
                                  }
                                : null),
                            }}
                          />
                        </Tooltip>
                      </TableCell>

                      <TableCell>{p.asOfDateISO ?? "-"}</TableCell>

                      <TableCell>
                        <Switch
                          checked={!!p.isActive}
                          onChange={(e) => onToggleActive(p.id, e.target.checked)}
                          disabled={!isAdmin || isPending}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}

                {viewRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Typography variant="body2" color="text.secondary">
                        No products found.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ResponsiveTable>
        </SectionCard>
      </PageShell>
    </>
  );
}
