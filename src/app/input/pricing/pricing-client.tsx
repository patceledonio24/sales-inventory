"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
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
import { saveProductPrices } from "./actions";

type Store = { id: string; name: string };
type Product = { id: string; name: string };
type PriceRow = { storeId: string; productId: string; lp: any; srp: any };

function money2str(v: string) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "0.00";
  return n.toFixed(2);
}

export default function PricingClient(props: {
  stores: Store[];
  products: Product[];
  prices: PriceRow[];
  initialStoreId: string;
  isStaff: boolean;
}) {
  const router = useRouter();

  // IMPORTANT: always a string (avoid uncontrolled -> controlled warnings)
  const initialStoreId = (props.initialStoreId ?? "").trim() || props.stores[0]?.id || "";
  const [storeId, setStoreId] = useState<string>(initialStoreId);

  const [saving, setSaving] = useState(false);

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  // priceMap: storeId:productId -> values
  const priceMap = useMemo(() => {
    const m = new Map<string, { lp: string; srp: string }>();
    for (const p of props.prices) {
      const key = `${p.storeId}:${p.productId}`;
      m.set(key, { lp: money2str(String(p.lp)), srp: money2str(String(p.srp)) });
    }
    return m;
  }, [props.prices]);

  // edits are per store+product key so switching stores preserves edits
  const [edits, setEdits] = useState<Record<string, { lp: string; srp: string }>>({});

  function getRowValue(productId: string) {
    const key = `${storeId}:${productId}`;
    return edits[key] ?? priceMap.get(key) ?? { lp: "0.00", srp: "0.00" };
  }

  function setRowValue(productId: string, next: { lp?: string; srp?: string }) {
    const key = `${storeId}:${productId}`;
    const cur = getRowValue(productId);
    setEdits((prev) => ({
      ...prev,
      [key]: { lp: next.lp ?? cur.lp, srp: next.srp ?? cur.srp },
    }));
  }

  const storeName = props.stores.find((s) => s.id === storeId)?.name ?? "-";

  // Optional metric: how many items differ from current saved values
  const dirtyCount = useMemo(() => {
    let c = 0;
    for (const p of props.products) {
      const key = `${storeId}:${p.id}`;
      const cur = priceMap.get(key) ?? { lp: "0.00", srp: "0.00" };
      const val = edits[key];
      if (!val) continue;
      if (money2str(val.lp) !== money2str(cur.lp) || money2str(val.srp) !== money2str(cur.srp)) c++;
    }
    return c;
  }, [edits, priceMap, props.products, storeId]);

  function onChangeStore(next: string) {
    const v = (next ?? "").toString();
    setStoreId(v);
    router.push(`/input/pricing?storeId=${encodeURIComponent(v)}`);
  }

  async function onSaveAll() {
    if (!storeId) return;

    setSaving(true);
    try {
      const rows = props.products.map((p) => {
        const val = getRowValue(p.id);
        return {
          productId: p.id,
          lp: String(val.lp ?? "0.00"),
          srp: String(val.srp ?? "0.00"),
        };
      });

      const res = await saveProductPrices({ storeId, rows });
      if (!res?.ok) throw new Error("SAVE_FAILED");

      setSnack({
        open: true,
        type: "success",
        message: `Prices saved successfully (${res.saved ?? rows.length} items).`,
      });

      router.refresh();
    } catch (e) {
      console.error(e);
      setSnack({ open: true, type: "error", message: "Failed to save prices." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <PageShell
        title="Pricing"
        subtitle="Maintain LP and SRP per product. Changes apply to the selected store."
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
                disabled={props.stores.length === 0}
              >
                {props.stores.length === 0 ? (
                  <MenuItem value="">
                    <em>No stores</em>
                  </MenuItem>
                ) : (
                  props.stores.map((s) => (
                    <MenuItem key={s.id} value={s.id}>
                      {s.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Stack>
        }
        headerRight={
          <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="flex-end">
            <Chip
              size="small"
              label={`Store: ${storeName}`}
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />

            <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Unsaved
              </Typography>
              <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
                {dirtyCount}
              </Typography>
            </Stack>

            <Button
              variant="contained"
              onClick={onSaveAll}
              disabled={saving || !storeId || props.products.length === 0}
              sx={{ borderRadius: 2, minWidth: 140 }}
            >
              {saving ? "Saving..." : "Save Prices"}
            </Button>
          </Stack>
        }
      >
        <SectionCard title="Price List" tip="Tip: Use tab to move across inputs quickly.">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                  LP
                </TableCell>
                <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                  SRP
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.products.map((p) => {
                const val = getRowValue(p.id);

                return (
                  <TableRow key={p.id} hover>
                    <TableCell sx={{ fontWeight: 700 }}>{p.name}</TableCell>

                    <TableCell align="right">
                      <TextField
                        value={val.lp}
                        onChange={(e) => setRowValue(p.id, { lp: e.target.value })}
                        size="small"
                        inputProps={{ inputMode: "decimal" }}
                        sx={{ width: 140 }}
                      />
                    </TableCell>

                    <TableCell align="right">
                      <TextField
                        value={val.srp}
                        onChange={(e) => setRowValue(p.id, { srp: e.target.value })}
                        size="small"
                        inputProps={{ inputMode: "decimal" }}
                        sx={{ width: 140 }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}

              {props.products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography variant="body2" color="text.secondary">
                      No active products found. Add products first.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
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
