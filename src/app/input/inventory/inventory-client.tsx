"use client";

import * as React from "react";
import { useMemo, useState, useTransition, useEffect } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";

import PageShell, { SectionCard } from "@/components/ui/page-shell";
import { saveDailyEntries } from "./actions";

type Store = { id: string; name: string };
type Product = { id: string; name: string };
type Price = { productId: string; lp: any; srp: any };
type Entry = { productId: string; beginQty: number; incomingQty: number; salesQty: number; endQty: number };

function n(v: any) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

function money2(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

function safeISODateInput(v: string) {
  const s = (v ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return "";
  return s;
}

export default function InventoryClient(props: {
  stores: Store[];
  products: Product[];
  prices: Array<{ productId: string; lp: string; srp: string }>;
  initialEntries: Entry[];
  initialStoreId: string;
  initialDateISO: string;
  isStaff: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isAdmin = !props.isStaff;

  const stores = Array.isArray(props.stores) ? props.stores : [];
  const products = Array.isArray(props.products) ? props.products : [];

  // Controlled defaults (avoid uncontrolled warnings)
  const safeInitialStoreId = (props.initialStoreId ?? "").trim() || stores[0]?.id || "";
  const safeInitialDateISO = safeISODateInput(props.initialDateISO ?? "") || isoDateOnly(new Date());

  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [dateISO, setDateISO] = useState<string>(safeInitialDateISO);

  // priceMap by productId
  const priceMap = useMemo(() => {
    const m = new Map<string, { lp: number; srp: number }>();
    for (const p of props.prices ?? []) {
      m.set(p.productId, { lp: n(p.lp), srp: n(p.srp) });
    }
    return m;
  }, [props.prices]);

  // Row state
  const [rows, setRows] = useState<
    Array<{
      productId: string;
      beginQty: string;
      incomingQty: string;
      salesQty: string;
      endQty: number;
    }>
  >(() => {
    const entryMap = new Map(props.initialEntries.map((e) => [e.productId, e]));
    return products.map((p) => {
      const e = entryMap.get(p.id);
      const beginQty = e ? String(e.beginQty) : "0";
      const incomingQty = e ? String(e.incomingQty) : "0";
      const salesQty = e ? String(e.salesQty) : "0";
      const endQty = n(beginQty) + n(incomingQty) - n(salesQty);
      return { productId: p.id, beginQty, incomingQty, salesQty, endQty };
    });
  });

  // Resync after navigation/refresh (server props changed)
  useEffect(() => {
    const entryMap = new Map((props.initialEntries ?? []).map((e) => [e.productId, e]));
    setRows(
      products.map((p) => {
        const e = entryMap.get(p.id);
        const beginQty = e ? String(e.beginQty) : "0";
        const incomingQty = e ? String(e.incomingQty) : "0";
        const salesQty = e ? String(e.salesQty) : "0";
        const endQty = n(beginQty) + n(incomingQty) - n(salesQty);
        return { productId: p.id, beginQty, incomingQty, salesQty, endQty };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.initialEntries, products.length]);

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const storeName = useMemo(
    () => stores.find((s) => s.id === storeId)?.name ?? "-",
    [stores, storeId]
  );

  const estSalesRevenue = useMemo(() => {
    if (!isAdmin) return 0;
    let sum = 0;
    for (const r of rows) {
      const srp = priceMap.get(r.productId)?.srp ?? 0;
      sum += Math.max(0, n(r.salesQty) * srp);
    }
    return sum;
  }, [rows, priceMap, isAdmin]);

  function navigate(nextStoreId: string, nextDateISO: string) {
    startTransition(() => {
      router.push(
        `/input/inventory?storeId=${encodeURIComponent(nextStoreId)}&date=${encodeURIComponent(nextDateISO)}`
      );
      router.refresh();
    });
  }

  function onChangeStore(next: string) {
    const v = (next ?? "").toString();
    setStoreId(v);
    navigate(v, dateISO);
  }

  function onChangeDate(next: string) {
    const v = safeISODateInput(next) || isoDateOnly(new Date(next));
    setDateISO(v);
    navigate(storeId, v);
  }

  function updateRow(
    productId: string,
    patch: Partial<{ beginQty: string; incomingQty: string; salesQty: string }>
  ) {
    setRows((prev) =>
      prev.map((r) => {
        if (r.productId !== productId) return r;
        const next = { ...r, ...patch };
        const sales = n(next.salesQty);
        const endQty = n(next.beginQty) + n(next.incomingQty) - sales;
        return { ...next, endQty };
      })
    );
  }

  async function onSaveAll() {
    if (!storeId || !dateISO) return;

    startTransition(async () => {
      try {
        const payload = {
          storeId,
          dateISO,
          rows: rows.map((r) => ({
            productId: r.productId,
            beginQty: r.beginQty,
            incomingQty: r.incomingQty,
            salesQty: r.salesQty,
          })),
        };

        const res = await saveDailyEntries(payload);
        if (!res?.ok) throw new Error("SAVE_FAILED");

        setSnack({ open: true, type: "success", message: "Inventory saved successfully." });
        router.refresh();
      } catch (e: any) {
        console.error(e);
        const msg = typeof e?.message === "string" ? e.message : "";
        if (msg === "UNAUTHORIZED") {
          setSnack({ open: true, type: "error", message: "Unauthorized." });
        } else {
          setSnack({ open: true, type: "error", message: "Failed to save inventory." });
        }
      }
    });
  }

  return (
    <>
      <PageShell
        title="Inventory Input"
        subtitle="Manual: Beginning, Incoming, Sales. Computed: Ending + Value. Saved entries are loaded per store/date."
        headerLeft={
          <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 42 }}>
              Store
            </Typography>

            <FormControl size="small" sx={{ minWidth: 220 }}>
              <Select
                value={storeId}
                onChange={(e) => onChangeStore(String(e.target.value))}
                displayEmpty
                disabled={stores.length === 0}
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

            <Typography variant="body2" color="text.secondary" sx={{ ml: 1, minWidth: 36 }}>
              Date
            </Typography>

            <TextField
              type="date"
              size="small"
              value={dateISO}
              onChange={(e) => onChangeDate(e.target.value)}
              sx={{ width: 170 }}
            />
          </Stack>
        }
        headerRight={
          <Stack
            direction="row"
            spacing={1.25}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ flexWrap: "wrap" }}
          >
            <Chip
              size="small"
              label={`Store: ${storeName}`}
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />

            <Chip
              size="small"
              label={`Date: ${dateISO}`}
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />

            {isAdmin && (
              <Stack spacing={0} sx={{ textAlign: "right", mr: 1, minWidth: 160 }}>
                <Typography variant="caption" color="text.secondary">
                  Est. Sales Revenue
                </Typography>
                <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
                  ₱{money2(estSalesRevenue)}
                </Typography>
              </Stack>
            )}

            <Button
              variant="contained"
              onClick={onSaveAll}
              disabled={isPending || !storeId || !dateISO || products.length === 0}
              sx={{ borderRadius: 2, minWidth: 140 }}
            >
              {isPending ? "Saving..." : "Save All"}
            </Button>
          </Stack>
        }
      >
        <SectionCard title="Daily Entries" tip="Tip: Use tab to move across inputs quickly.">
          <Box sx={{ overflowX: "auto" }}>
            <Table size="small" sx={{ minWidth: { xs: 980, md: "auto" } }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800 }}>Product</TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }} align="right">
                    LP
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }} align="right">
                    SRP
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                    Begin
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                    Incoming
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                    Sales
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 140 }} align="right">
                    End
                  </TableCell>
                  {isAdmin && (
                    <TableCell sx={{ fontWeight: 800, width: 170 }} align="right">
                      Sales Value
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {products.map((p) => {
                  const r = rows.find((x) => x.productId === p.id);
                  const lp = priceMap.get(p.id)?.lp ?? 0;
                  const srp = priceMap.get(p.id)?.srp ?? 0;

                  const salesQty = r ? n(r.salesQty) : 0;
                  const salesValue = salesQty * srp;

                  return (
                    <TableRow key={p.id} hover>
                      <TableCell sx={{ fontWeight: 700 }}>{p.name}</TableCell>

                      <TableCell align="right">{money2(lp)}</TableCell>
                      <TableCell align="right">{money2(srp)}</TableCell>

                      <TableCell align="right">
                        <TextField
                          value={r?.beginQty ?? "0"}
                          onChange={(e) => updateRow(p.id, { beginQty: e.target.value })}
                          size="small"
                          inputProps={{ inputMode: "numeric" }}
                          sx={{ width: { xs: 120, sm: 140 } }}
                        />
                      </TableCell>

                      <TableCell align="right">
                        <TextField
                          value={r?.incomingQty ?? "0"}
                          onChange={(e) => updateRow(p.id, { incomingQty: e.target.value })}
                          size="small"
                          inputProps={{ inputMode: "numeric" }}
                          sx={{ width: { xs: 120, sm: 140 } }}
                        />
                      </TableCell>

                      <TableCell align="right">
                        <TextField
                          value={r?.salesQty ?? "0"}
                          onChange={(e) => updateRow(p.id, { salesQty: e.target.value })}
                          size="small"
                          inputProps={{ inputMode: "numeric" }}
                          sx={{ width: { xs: 120, sm: 140 } }}
                        />
                      </TableCell>

                      <TableCell align="right" sx={{ fontWeight: 900 }}>
                        {r?.endQty ?? 0}
                      </TableCell>

                      {isAdmin && (
                        <TableCell align="right" sx={{ fontWeight: 900 }}>
                          {money2(salesValue)}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}

                {products.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={isAdmin ? 8 : 7}>
                      <Typography variant="body2" color="text.secondary">
                        No active products found. Add products first.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>

          <Typography variant="caption" sx={{ opacity: 0.75, display: "block", mt: 1 }}>
            Note: “Sales Value” is computed as Sales Qty × SRP (snapshot).
          </Typography>
        </SectionCard>
      </PageShell>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snack.type}
          variant="filled"
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
}
