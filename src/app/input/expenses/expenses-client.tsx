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
  Autocomplete,
  CircularProgress,
} from "@mui/material";

import PageShell, { SectionCard } from "@/components/ui/page-shell";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { addExpense, deleteExpense, searchExpenseSuggestions } from "./actions";

type Store = { id: string; name: string };
type ExpenseRow = { id: string; description: string; amount: string };

function toNum(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function money2(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function todayISOManila() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export default function ExpensesClient(props: {
  stores?: Store[];
  initialStoreId: string;
  initialDateISO: string;
  initialRows: ExpenseRow[];
  isStaff: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const stores = Array.isArray(props.stores) ? props.stores : [];

  const safeInitialStoreId =
    (props.initialStoreId ?? "").trim() || stores[0]?.id || "";
  const safeInitialDateISO = (props.initialDateISO ?? "").trim() || "";

  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [dateISO, setDateISO] = useState<string>(safeInitialDateISO);

  const staffLocked = props.isStaff && dateISO !== todayISOManila();

  const [rows, setRows] = useState<ExpenseRow[]>(props.initialRows ?? []);

  useEffect(() => {
    setRows(props.initialRows ?? []);
  }, [props.initialRows]);

  useEffect(() => {
    if (!storeId && stores.length > 0) setStoreId(stores[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores.length]);

  // ===== Input state =====
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  // ===== Autocomplete =====
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestLoading, setSuggestLoading] = useState(false);

  useEffect(() => {
    const q = desc.trim();
    if (!storeId || q.length < 1) {
      setSuggestions([]);
      setSuggestLoading(false);
      return;
    }

    let cancelled = false;
    setSuggestLoading(true);

    const t = setTimeout(async () => {
      try {
        const res = await searchExpenseSuggestions({ storeId, q, limit: 8 });
        if (!cancelled && res?.ok) setSuggestions(res.items ?? []);
      } catch {
        if (!cancelled) setSuggestions([]);
      } finally {
        if (!cancelled) setSuggestLoading(false);
      }
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [desc, storeId]);

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const storeName = useMemo(
    () => stores.find((s) => s.id === storeId)?.name ?? "-",
    [stores, storeId]
  );

  const total = useMemo(
    () => rows.reduce((sum, r) => sum + toNum(r.amount), 0),
    [rows]
  );

  function navigate(nextStoreId: string, nextDateISO: string) {
    startTransition(() => {
      router.push(
        `/input/expenses?storeId=${encodeURIComponent(nextStoreId)}&date=${encodeURIComponent(
          nextDateISO
        )}`
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

  // ===== ADD EXPENSE (with zero validation) =====
  async function onAdd() {
    if (staffLocked) {
      setSnack({ open: true, type: "error", message: "Staff can only add expenses for today." });
      return;
    }
    const d = desc.trim();
    const amt = toNum(amount || "0");

    if (!d || !storeId || !dateISO) return;

    if (amt <= 0) {
      setSnack({
        open: true,
        type: "error",
        message: "Amount must be greater than 0.",
      });
      return;
    }

    startTransition(async () => {
      try {
        const res = await addExpense({
          storeId,
          dateISO,
          description: d,
          amount: String(amt),
        });

        if (!res?.ok) throw new Error("ADD_FAILED");

        if (res.row) {
          const safeRow: ExpenseRow = {
            id: String((res.row as any).id),
            description: String((res.row as any).description ?? ""),
            amount: String((res.row as any).amount ?? "0"),
          };
          setRows((prev) => {
            const idx = prev.findIndex((r) => r.id === safeRow.id);
            if (idx >= 0) {
              const next = [...prev];
              next[idx] = safeRow;
              return next;
            }
            return [...prev, safeRow];
          });
        } else {
          router.refresh();
        }

        setDesc("");
        setAmount("");
        setSuggestions([]);

        setSnack({
          open: true,
          type: "success",
          message: "Expense added successfully.",
        });
      } catch (e: any) {
        console.error(e);
        const msg = typeof e?.message === "string" ? e.message : "";
        if (msg === "STAFF_TODAY_ONLY") {
          setSnack({ open: true, type: "error", message: "Staff can only add expenses for today." });
          return;
        }
        setSnack({
          open: true,
          type: "error",
          message: "Failed to add expense.",
        });
      }
    });
  }

  async function onDelete(id: string) {
    if (staffLocked) {
      setSnack({ open: true, type: "error", message: "Staff can only delete expenses for today." });
      return;
    }
    startTransition(async () => {
      try {
        const res = await deleteExpense({ id });
        if (!res?.ok) throw new Error("DELETE_FAILED");
        setRows((prev) => prev.filter((r) => r.id !== id));
        setSnack({ open: true, type: "success", message: "Expense deleted." });
      } catch (e: any) {
        const msg = typeof e?.message === "string" ? e.message : "";
        if (msg === "STAFF_TODAY_ONLY") {
          setSnack({ open: true, type: "error", message: "Staff can only delete expenses for today." });
          return;
        }
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
            <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: { xs: "100%", sm: 320 } }}>
              <Typography variant="body2" color="text.secondary" sx={{ minWidth: 42 }}>
                Store
              </Typography>
              <FormControl size="small" sx={{ minWidth: 220 }}>
                <Select value={storeId} onChange={(e) => onChangeStore(String(e.target.value))}>
                  {stores.map((s) => (
                    <MenuItem key={s.id} value={s.id}>
                      {s.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                Date
              </Typography>
              <TextField
                size="small"
                type="date"
                value={dateISO}
                onChange={(e) => onChangeDate(e.target.value)}
              />
            </Stack>
          </Stack>
        }
        headerRight={
          <Stack direction="row" spacing={1.25} alignItems="center">
            <Chip size="small" label={`Store: ${storeName}`} variant="outlined" />
            <Chip size="small" label={`Date: ${dateISO}`} variant="outlined" />
            <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
              <Typography variant="caption">Total</Typography>
              <Typography variant="h6" fontWeight={900}>
                {money2(total)}
              </Typography>
            </Stack>
          </Stack>
        }
      >
        {staffLocked && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Staff can only add/delete expenses for <b>today</b> ({todayISOManila()}).
          </Alert>
        )}
        <SectionCard title="Expense Entries" tip="Tip: Use suggestions for faster input.">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mb: 2 }}>
            <Autocomplete
              freeSolo
              options={suggestions}
              inputValue={desc}
              onInputChange={(_, value) => setDesc(value)}
              filterOptions={(x) => x}
              loading={suggestLoading}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Expense description (e.g., Lalamove, Uling, Basahan)"
                  size="small"
                  disabled={isPending || staffLocked}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {suggestLoading ? <CircularProgress size={18} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />

            <TextField
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              inputMode="decimal"
              size="small"
              disabled={isPending || staffLocked}
              sx={{ width: { xs: "100%", sm: 180 } }}
            />

            <Button
              variant="contained"
              onClick={onAdd}
              disabled={isPending || staffLocked || !desc.trim() || toNum(amount) <= 0}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              Add
            </Button>
          </Stack>

          <ResponsiveTable minWidth={720}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 800 }} align="right">
                    Amount
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.id} hover>
                    <TableCell>{r.description}</TableCell>
                    <TableCell align="right">{money2(toNum(r.amount))}</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" onClick={() => onDelete(r.id)} disabled={isPending || staffLocked}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell sx={{ fontWeight: 900 }}>Total</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 900 }}>
                    {money2(total)}
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </ResponsiveTable>
        </SectionCard>
      </PageShell>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={snack.type} variant="filled">
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
}
