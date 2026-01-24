"use client";

import * as React from "react";
import { useMemo, useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Stack,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Chip,
  Button,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Snackbar,
  Alert,
} from "@mui/material";

import PageShell, { SectionCard } from "@/components/ui/page-shell";
import { addExpense, deleteExpense } from "./actions";

type Store = { id: string; name: string };
type ExpenseRow = { id: string; description: string; amount: string };

function toNum(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function money2(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function ExpensesClient(props: {
  stores?: Store[]; // allow undefined safely
  initialStoreId: string;
  initialDateISO: string;
  initialRows: ExpenseRow[];
  isStaff: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const stores = Array.isArray(props.stores) ? props.stores : [];

  // Always strings to avoid uncontrolled warnings + avoid crash when stores is empty
  const safeInitialStoreId =
    (props.initialStoreId ?? "").trim() || stores[0]?.id || "";
  const safeInitialDateISO = (props.initialDateISO ?? "").trim() || "";

  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [dateISO, setDateISO] = useState<string>(safeInitialDateISO);

  const [rows, setRows] = useState<ExpenseRow[]>(props.initialRows ?? []);

  // Sync local rows when server props change
  useEffect(() => {
    setRows(props.initialRows ?? []);
  }, [props.initialRows]);

  // Also keep storeId valid if stores arrive later
  useEffect(() => {
    if (!storeId && stores.length > 0) {
      setStoreId(stores[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores.length]);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const storeName = useMemo(
    () => stores.find((s) => s.id === storeId)?.name ?? "-",
    [stores, storeId]
  );

  const total = useMemo(() => {
    return rows.reduce((sum, r) => sum + toNum(r.amount), 0);
  }, [rows]);

  function navigate(nextStoreId: string, nextDateISO: string) {
    startTransition(() => {
      router.push(
        `/input/expenses?storeId=${encodeURIComponent(nextStoreId)}&date=${encodeURIComponent(nextDateISO)}`
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
    const v = (next ?? "").toString();
    setDateISO(v);
    navigate(storeId, v);
  }

  async function onAdd() {
    const d = desc.trim();
    if (!d || !storeId || !dateISO) return;

    startTransition(async () => {
      try {
        const res = await addExpense({
          storeId,
          dateISO,
          description: d,
          amount: amount || "0",
        });

        if (!res?.ok) throw new Error("ADD_FAILED");

        if (res.row) setRows((prev) => [...prev, res.row]);
        else router.refresh();

        setDesc("");
        setAmount("");

        setSnack({ open: true, type: "success", message: "Expense added successfully." });
      } catch (e: any) {
        console.error(e);
        const msg = typeof e?.message === "string" ? e.message : "";
        if (msg === "DESCRIPTION_REQUIRED") {
          setSnack({ open: true, type: "error", message: "Description is required." });
        } else if (msg === "INVALID_DATE") {
          setSnack({ open: true, type: "error", message: "Invalid date." });
        } else if (msg === "UNAUTHORIZED") {
          setSnack({ open: true, type: "error", message: "Unauthorized." });
        } else {
          setSnack({ open: true, type: "error", message: "Failed to add expense." });
        }
      }
    });
  }

  async function onDelete(id: string) {
    startTransition(async () => {
      try {
        const res = await deleteExpense({ id });
        if (!res?.ok) throw new Error("DELETE_FAILED");
        setRows((prev) => prev.filter((r) => r.id !== id));
        setSnack({ open: true, type: "success", message: "Expense deleted." });
      } catch (e) {
        console.error(e);
        setSnack({ open: true, type: "error", message: "Failed to delete expense." });
      }
    });
  }

  return (
    <>
      <PageShell
        title="Petty Cash / Expenses"
        subtitle="Record daily expenses and petty cash items."
        headerLeft={
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 320 }}>
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
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary" sx={{ minWidth: 36 }}>
                Date
              </Typography>
              <TextField
                size="small"
                type="date"
                value={dateISO}
                onChange={(e) => onChangeDate(e.target.value)}
                disabled={isPending}
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
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
            <Chip
              size="small"
              label={`Date: ${dateISO}`}
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />
            <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Total
              </Typography>
              <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
                {money2(total)}
              </Typography>
            </Stack>
          </Stack>
        }
      >
        <SectionCard title="Expense Entries" tip="Tip: Add items then delete if needed.">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mb: 2 }}>
            <TextField
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Expense description (e.g., Uling, Basahan, Lalamove...)"
              size="small"
              disabled={isPending}
              fullWidth
            />
            <TextField
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              inputMode="decimal"
              size="small"
              disabled={isPending}
              sx={{ width: { xs: "100%", sm: 180 } }}
            />
            <Button
              variant="contained"
              onClick={onAdd}
              disabled={isPending || !storeId || !dateISO || !desc.trim()}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {isPending ? "Working..." : "Add"}
            </Button>
          </Stack>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 800, width: 160 }} align="right">
                  Amount
                </TableCell>
                <TableCell sx={{ fontWeight: 800, width: 140 }} />
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography variant="body2" color="text.secondary">
                      No expenses for this date.
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((r) => (
                  <TableRow key={r.id} hover>
                    <TableCell sx={{ fontWeight: 600 }}>{r.description}</TableCell>
                    <TableCell align="right" sx={{ fontVariantNumeric: "tabular-nums" }}>
                      {money2(toNum(r.amount))}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={() => onDelete(r.id)}
                        disabled={isPending}
                        sx={{ borderRadius: 2 }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}

              <TableRow>
                <TableCell sx={{ fontWeight: 900 }}>Total</TableCell>
                <TableCell align="right" sx={{ fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>
                  {money2(total)}
                </TableCell>
                <TableCell />
              </TableRow>
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
