"use client";

import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Alert,
  Tooltip,
} from "@mui/material";

import { createProduct, setProductActive, getProductsWithStock } from "./actions";

export type StoreRow = {
  id: string;
  name: string;
};

export type ProductRow = {
  id: string;
  name: string;
  sku: string | null;
  isActive: boolean;
  stock: number;
  asOfDateISO: string | null;
};

type SortMode = "NAME_ASC" | "STOCK_DESC" | "STOCK_ASC" | "STATUS";

export default function ProductsClient({
  stores,
  initialStoreId,
  initialProducts,
}: {
  stores: StoreRow[];
  initialStoreId: string;
  initialProducts: ProductRow[];
}) {
  const [storeId, setStoreId] = React.useState(initialStoreId);
  const [products, setProducts] = React.useState<ProductRow[]>(initialProducts);

  const [q, setQ] = React.useState("");
  const [name, setName] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [loadingStock, setLoadingStock] = React.useState(false);

  // Optional enhancement: configurable LOW threshold (global, UI-level)
  const [lowThreshold, setLowThreshold] = React.useState<number>(10);

  // Optional enhancement: sorting by stock / status
  const [sortMode, setSortMode] = React.useState<SortMode>("NAME_ASC");

  // Optional enhancement: quick filters from banner
  const [quickFilter, setQuickFilter] = React.useState<"ALL" | "LOW" | "OUT">("ALL");

  const thresholdsText = React.useMemo(() => {
    const t = Number.isFinite(lowThreshold) ? Math.max(0, Math.floor(lowThreshold)) : 10;
    return `OK: > ${t}, LOW: 1–${t}, OUT: 0`;
  }, [lowThreshold]);

  function statusOf(qty: number) {
    const t = Number.isFinite(lowThreshold) ? Math.max(0, Math.floor(lowThreshold)) : 10;

    if (qty <= 0) {
      return {
        label: "OUT",
        color: "error" as const, // RED
        tooltip: `Out of stock (0). ${thresholdsText}`,
        isPulsing: true,
      };
    }
    if (qty <= t) {
      return {
        label: "LOW",
        color: "warning" as const, // ORANGE
        tooltip: `Low stock (≤ ${t}). ${thresholdsText}`,
        isPulsing: false,
      };
    }
    return {
      label: "OK",
      color: "success" as const, // GREEN
      tooltip: `Sufficient stock (> ${t}). ${thresholdsText}`,
      isPulsing: false,
    };
  }

  const stats = React.useMemo(() => {
    let out = 0;
    let low = 0;

    for (const p of products) {
      const st = statusOf(p.stock);
      if (st.label === "OUT") out += 1;
      else if (st.label === "LOW") low += 1;
    }

    return { out, low };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, lowThreshold]); // statusOf depends on lowThreshold

  const normalizedQuery = React.useMemo(() => q.trim().toLowerCase(), [q]);

  const viewRows = React.useMemo(() => {
    // 1) search filter
    let rows = products.filter((p) => {
      if (!normalizedQuery) return true;
      const n = p.name.toLowerCase();
      const k = (p.sku ?? "").toLowerCase();
      return n.includes(normalizedQuery) || k.includes(normalizedQuery);
    });

    // 2) quick filter (from banner)
    if (quickFilter !== "ALL") {
      rows = rows.filter((p) => statusOf(p.stock).label === quickFilter);
    }

    // 3) sorting
    const sortKey = (p: ProductRow) => {
      const st = statusOf(p.stock).label;
      // lower number = higher priority in STATUS sort
      const statusRank = st === "OUT" ? 0 : st === "LOW" ? 1 : 2;
      return { statusRank };
    };

    rows = [...rows].sort((a, b) => {
      if (sortMode === "NAME_ASC") {
        return a.name.localeCompare(b.name);
      }

      if (sortMode === "STOCK_DESC") {
        const d = (b.stock ?? 0) - (a.stock ?? 0);
        if (d !== 0) return d;
        return a.name.localeCompare(b.name);
      }

      if (sortMode === "STOCK_ASC") {
        const d = (a.stock ?? 0) - (b.stock ?? 0);
        if (d !== 0) return d;
        return a.name.localeCompare(b.name);
      }

      // STATUS: OUT first, then LOW, then OK; within each, lower stock first
      const ra = sortKey(a).statusRank;
      const rb = sortKey(b).statusRank;
      if (ra !== rb) return ra - rb;

      const d = (a.stock ?? 0) - (b.stock ?? 0);
      if (d !== 0) return d;

      return a.name.localeCompare(b.name);
    });

    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, normalizedQuery, quickFilter, sortMode, lowThreshold]);

  async function refreshForStore(nextStoreId: string) {
    setLoadingStock(true);
    try {
      const rows = await getProductsWithStock({ storeId: nextStoreId });
      setProducts(rows as ProductRow[]);
    } finally {
      setLoadingStock(false);
    }
  }

  async function onChangeStore(nextStoreId: string) {
    setStoreId(nextStoreId);
    setQuickFilter("ALL");
    await refreshForStore(nextStoreId);
  }

  async function onAdd() {
    const n = name.trim();
    const k = sku.trim() || null;
    if (!n) return;

    setSaving(true);
    try {
      const res = await createProduct({ name: n, sku: k });
      const created = (res as any).product as {
        id: string;
        name: string;
        sku: string | null;
        isActive: boolean;
      };

      // New products have no inventory entries yet → stock defaults to 0
      const row: ProductRow = {
        id: created.id,
        name: created.name,
        sku: created.sku,
        isActive: created.isActive,
        stock: 0,
        asOfDateISO: null,
      };

      setProducts((prev) => [row, ...prev]);
      setName("");
      setSku("");
    } finally {
      setSaving(false);
    }
  }

  async function onToggleActive(productId: string, next: boolean) {
    // Optimistic UI
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, isActive: next } : p)));

    try {
      await setProductActive({ productId, isActive: next });
    } catch {
      // revert on failure
      setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, isActive: !next } : p)));
    }
  }

  const showBanner = stats.low > 0 || stats.out > 0;

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto" }}>
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h5" fontWeight={800}>
            Products
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Add products and manage Active/Inactive status. View current stock per store (latest inventory entry).
          </Typography>
        </Box>

        {/* Optional enhancement: low-stock summary banner + quick filters */}
        {showBanner && (
          <Alert
            severity={stats.out > 0 ? "error" : "warning"}
            sx={{ borderRadius: 2 }}
            action={
              <Stack direction="row" spacing={1} alignItems="center">
                <Button
                  size="small"
                  variant={quickFilter === "OUT" ? "contained" : "outlined"}
                  color="error"
                  onClick={() => setQuickFilter((p) => (p === "OUT" ? "ALL" : "OUT"))}
                >
                  OUT ({stats.out})
                </Button>
                <Button
                  size="small"
                  variant={quickFilter === "LOW" ? "contained" : "outlined"}
                  color="warning"
                  onClick={() => setQuickFilter((p) => (p === "LOW" ? "ALL" : "LOW"))}
                >
                  LOW ({stats.low})
                </Button>
                <Button
                  size="small"
                  variant={quickFilter === "ALL" ? "contained" : "outlined"}
                  onClick={() => setQuickFilter("ALL")}
                >
                  Show all
                </Button>
              </Stack>
            }
          >
            <Typography variant="body2">
              {stats.out > 0 && stats.low > 0
                ? `${stats.out} product(s) are OUT of stock and ${stats.low} product(s) are LOW on stock for this store.`
                : stats.out > 0
                ? `${stats.out} product(s) are OUT of stock for this store.`
                : `${stats.low} product(s) are LOW on stock for this store.`}{" "}
              Threshold: LOW ≤ {Math.max(0, Math.floor(lowThreshold))}.
            </Typography>
          </Alert>
        )}

        <Paper sx={{ p: 2.5, borderRadius: 2 }}>
          <Stack spacing={2}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <FormControl sx={{ width: { xs: "100%", sm: 320 } }}>
                <InputLabel id="store-select-label">Store</InputLabel>
                <Select
                  labelId="store-select-label"
                  value={storeId}
                  label="Store"
                  onChange={(e) => onChangeStore(String(e.target.value))}
                  disabled={stores.length === 0}
                >
                  {stores.map((s) => (
                    <MenuItem key={s.id} value={s.id}>
                      {s.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography variant="body2" color="text.secondary">
                {loadingStock
                  ? "Loading stock..."
                  : "Stock is based on the latest saved inventory entry for the selected store."}
              </Typography>
            </Stack>

            <Divider />

            {/* Optional enhancement: configurable LOW threshold */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <TextField
                label="LOW threshold"
                type="number"
                value={lowThreshold}
                onChange={(e) => setLowThreshold(Number(e.target.value))}
                inputProps={{ min: 0, step: 1 }}
                sx={{ width: { xs: "100%", sm: 200 } }}
                helperText={thresholdsText}
              />

              {/* Sorting by stock */}
              <FormControl sx={{ width: { xs: "100%", sm: 260 } }}>
                <InputLabel id="sort-select-label">Sort</InputLabel>
                <Select
                  labelId="sort-select-label"
                  value={sortMode}
                  label="Sort"
                  onChange={(e) => setSortMode(e.target.value as SortMode)}
                >
                  <MenuItem value="NAME_ASC">Name (A → Z)</MenuItem>
                  <MenuItem value="STOCK_DESC">Stock (High → Low)</MenuItem>
                  <MenuItem value="STOCK_ASC">Stock (Low → High)</MenuItem>
                  <MenuItem value="STATUS">Status (OUT → LOW → OK)</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body2" color="text.secondary">
                Tip: Use the banner buttons to focus on LOW/OUT products.
              </Typography>
            </Stack>

            <Divider />

            <Typography variant="subtitle1" fontWeight={700}>
              Add product
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <TextField
                label="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <TextField
                label="SKU (optional)"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                sx={{ width: { xs: "100%", sm: 240 } }}
              />
              <Button
                variant="contained"
                onClick={onAdd}
                disabled={saving || !name.trim()}
                sx={{ minWidth: 140, borderRadius: 2 }}
              >
                {saving ? "Saving..." : "Add"}
              </Button>
            </Stack>

            <Divider />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
              <TextField label="Search" value={q} onChange={(e) => setQ(e.target.value)} fullWidth />
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                {viewRows.length} item(s)
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 700, width: 220 }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 700, width: 120 }} align="right">
                  Stock
                </TableCell>
                <TableCell sx={{ fontWeight: 700, width: 140 }} align="center">
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: 700, width: 140 }}>
                  As of
                </TableCell>
                <TableCell sx={{ fontWeight: 700, width: 140 }}>Active</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {viewRows.map((p) => {
                const st = statusOf(p.stock);

                return (
                  <TableRow key={p.id} hover>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.sku ?? "-"}</TableCell>
                    <TableCell align="right" sx={{ fontVariantNumeric: "tabular-nums" }}>
                      {p.stock}
                    </TableCell>

                    <TableCell align="center">
                      {/* Optional enhancement: tooltip + pulsing OUT */}
                      <Tooltip title={st.tooltip} arrow placement="top">
                        <Chip
                          label={st.label}
                          color={st.color}
                          size="small"
                          sx={{
                            fontWeight: 800,
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
                        checked={p.isActive}
                        onChange={(e) => onToggleActive(p.id, e.target.checked)}
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
        </Paper>
      </Stack>
    </Box>
  );
}
