"use client";

import * as React from "react";
import { useEffect, useMemo, useState, useTransition } from "react";
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
} from "@mui/material";

import PageShell, { SectionCard } from "@/components/ui/page-shell";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { exportAuditCSV } from "./export";

type Store = { id: string; name: string };

type RemainingStatus = "OVER" | "UNDER" | "BALANCED";
type DisplayStatus = "SHORT" | "OVER" | "BALANCED";

function n(v: any) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

// Parse strings like "16,800.00"
function money(v: string) {
  return n(String(v ?? "").replace(/,/g, ""));
}

function money2(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function AuditClient(props: {
  stores: Store[];
  initialStoreId: string;
  initialDateISO: string;
  totals: {
    totalSales: string;
    cash: string;
    gcash: string;
    expenses: string;
    remaining: string;
    remainingAbs: string;
    remainingStatus: RemainingStatus;
    notes?: string;
    // Optional future-proof if you later pass it from server:
    runningPettyCash?: string;
    // Previous day petty cash balance (used for running balance header)
    previousPettyCashBalance?: string;
  };
  expenses: {
    id: string;
    description: string;
    amount: string;
    createdAtISO: string;
    createdAtTime: string;
  }[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const stores = Array.isArray(props.stores) ? props.stores : [];

  // Always safe strings
  const safeInitialStoreId = (props.initialStoreId ?? "").trim() || stores[0]?.id || "";
  const safeInitialDateISO = (props.initialDateISO ?? "").trim() || isoDateOnly(new Date());

  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [dateISO, setDateISO] = useState<string>(safeInitialDateISO);

  // Resync if server props change after navigation
  useEffect(() => {
    const nextStoreId = (props.initialStoreId ?? "").trim() || stores[0]?.id || "";
    const nextDateISO = (props.initialDateISO ?? "").trim() || isoDateOnly(new Date());
    setStoreId(nextStoreId);
    setDateISO(nextDateISO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.initialStoreId, props.initialDateISO, stores.length]);

  const storeName = useMemo(
    () => stores.find((s) => s.id === storeId)?.name ?? "-",
    [stores, storeId]
  );

  const navigate = (s: string, d: string) => {
    startTransition(() => {
      router.push(`/audit?storeId=${encodeURIComponent(s)}&date=${encodeURIComponent(d)}`);
      router.refresh();
    });
  };

  async function onExport() {
    const res = await exportAuditCSV(storeId, dateISO);
    const blob = new Blob([res.content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = res.filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  /* =======================
     COMPUTATIONS
  ======================== */
  const totalSalesNum = money(props.totals.totalSales);
  const cashNum = money(props.totals.cash);
  const gcashNum = money(props.totals.gcash);
  const expensesNum = money(props.totals.expenses);

  // Original audit logic (kept)
  const sumIn = cashNum + gcashNum + expensesNum;
  const diff = sumIn - totalSalesNum;

  const statusLabel: DisplayStatus = diff < 0 ? "SHORT" : diff > 0 ? "OVER" : "BALANCED";

  // Running petty cash balance (header line)
  // Assumption: "petty cash running balance" for the day = Cash + GCash - Expenses.
  // If you later pass a real running balance from server (e.g., starting float + ...),
  // just use props.totals.runningPettyCash instead.
  const pettyCashBalance = useMemo(() => {
    if (props.totals.runningPettyCash != null) {
      return money(props.totals.runningPettyCash);
    }
    return cashNum + gcashNum - expensesNum;
  }, [cashNum, gcashNum, expensesNum, props.totals.runningPettyCash]);

  const previousPettyCashBalance = useMemo(() => {
    return money(props.totals.previousPettyCashBalance ?? "0");
  }, [props.totals.previousPettyCashBalance]);

  const runningBalance = useMemo(() => {
    return previousPettyCashBalance + pettyCashBalance;
  }, [previousPettyCashBalance, pettyCashBalance]);

  const highlight: "red" | "orange" | "green" =
    statusLabel === "SHORT" ? "red" : statusLabel === "OVER" ? "orange" : "green";

  const remainingDisplay =
    statusLabel === "SHORT" ? `-${props.totals.remainingAbs}` : props.totals.remainingAbs;

  const statusChipSx = (theme: any) => {
    const base = {
      fontWeight: 900,
      letterSpacing: 0.3,
      borderWidth: 1,
    } as const;

    if (highlight === "red") {
      return {
        ...base,
        color: theme.palette.mode === "dark" ? "rgba(255,180,180,0.95)" : "#8b0000",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,77,77,0.20)" : "rgba(255,77,77,0.12)",
        borderColor: theme.palette.mode === "dark" ? "rgba(255,77,77,0.45)" : "rgba(255,77,77,0.30)",
      };
    }
    if (highlight === "orange") {
      return {
        ...base,
        color: theme.palette.mode === "dark" ? "rgba(255,215,160,0.98)" : "#8a4b00",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,159,10,0.22)" : "rgba(255,159,10,0.14)",
        borderColor: theme.palette.mode === "dark" ? "rgba(255,159,10,0.45)" : "rgba(255,159,10,0.32)",
      };
    }
    return {
      ...base,
      color: theme.palette.mode === "dark" ? "rgba(182,243,197,0.98)" : "#0b6b37",
      backgroundColor: theme.palette.mode === "dark" ? "rgba(52,199,89,0.22)" : "rgba(52,199,89,0.12)",
      borderColor: theme.palette.mode === "dark" ? "rgba(52,199,89,0.45)" : "rgba(52,199,89,0.30)",
    };
  };

  const remainingBoxSx = (theme: any) => {
    const base = {
      p: 1.5,
      borderRadius: 2,
      border: `1px solid ${theme.palette.divider}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    } as const;

    if (highlight === "red") {
      return {
        ...base,
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,77,77,0.14)" : "rgba(255,77,77,0.08)",
      };
    }
    if (highlight === "orange") {
      return {
        ...base,
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,159,10,0.14)" : "rgba(255,159,10,0.08)",
      };
    }
    return {
      ...base,
      backgroundColor: theme.palette.mode === "dark" ? "rgba(52,199,89,0.14)" : "rgba(52,199,89,0.08)",
    };
  };

  return (
    <PageShell
      title="Audit"
      subtitle="Reconcile sales, remittance, and petty cash expenses for the selected store/date."
      headerLeft={
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: { xs: "100%", sm: 320 } }}>
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 42 }}>
              Store
            </Typography>
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <Select
                value={storeId}
                onChange={(e) => {
                  const v = String(e.target.value);
                  setStoreId(v);
                  navigate(v, dateISO);
                }}
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
            <Box
              component="input"
              type="date"
              value={dateISO}
              onChange={(e: any) => {
                const v = String(e.target.value);
                setDateISO(v);
                navigate(storeId, v);
              }}
              disabled={isPending}
              sx={(theme) => ({
                height: 40,
                px: 1.25,
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.divider}`,
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                outline: "none",
              })}
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
            sx={(theme) => ({
              borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.18)" : theme.palette.divider,
              color: theme.palette.text.secondary,
            })}
          />
          <Chip
            size="small"
            label={`Date: ${dateISO}`}
            variant="outlined"
            sx={(theme) => ({
              borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.18)" : theme.palette.divider,
              color: theme.palette.text.secondary,
            })}
          />

          <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Petty Cash Balance
            </Typography>
            <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
              ₱{money2(pettyCashBalance)}
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
              Running Balance
            </Typography>
            <Typography variant="subtitle2" fontWeight={900} sx={{ lineHeight: 1.1 }}>
              ₱{money2(runningBalance)}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            onClick={onExport}
            disabled={isPending || !storeId || !dateISO}
            sx={{ borderRadius: 2, minWidth: 130 }}
          >
            Export CSV
          </Button>
        </Stack>
      }
    >
      <SectionCard title="Audit Summary" tip="Tip: Remaining shows whether the day is short/over/balanced.">
        <Stack spacing={1.25}>
          {[
            ["Total Sales", props.totals.totalSales],
            ["Cash", props.totals.cash],
            ["GCash", props.totals.gcash],
            ["Expenses", props.totals.expenses],
          ].map(([k, v]) => (
            <Stack
              key={k}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 0.5 }}
            >
              <Typography variant="body2" color="text.secondary" fontWeight={800}>
                {k}
              </Typography>
              <Typography variant="body2" fontWeight={800} sx={{ fontVariantNumeric: "tabular-nums" }}>
                {v}
              </Typography>
            </Stack>
          ))}

          <Box sx={remainingBoxSx}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography fontWeight={900}>Remaining</Typography>
              <Chip size="small" label={statusLabel} variant="outlined" sx={statusChipSx} />
            </Stack>
            <Typography fontWeight={900} sx={{ fontVariantNumeric: "tabular-nums" }}>
              {remainingDisplay}
            </Typography>
          </Box>

          {props.totals.notes ? (
            <Typography variant="caption" color="text.secondary">
              Notes: {props.totals.notes}
            </Typography>
          ) : null}
        </Stack>
      </SectionCard>

      <SectionCard title="Petty Cash / Expenses" tip="Tip: This list comes from your expenses entries for the date.">
        {props.expenses.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No expenses.
          </Typography>
        ) : (
          <ResponsiveTable minWidth={720}>
            <Box sx={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "inherit" }}>
                <thead>
                  <tr>
                    <th align="left" style={{ fontWeight: 800, padding: "10px 8px", whiteSpace: "nowrap" }}>
                      Description
                    </th>
                    <th align="right" style={{ fontWeight: 800, padding: "10px 8px", whiteSpace: "nowrap" }}>
                      Amount
                    </th>
                    <th align="right" style={{ fontWeight: 800, padding: "10px 8px", whiteSpace: "nowrap" }}>
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.expenses.map((e, idx) => (
                    <tr key={e.id} style={{ background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
                      <td style={{ padding: "10px 8px", fontWeight: 600 }}>{e.description}</td>
                      <td style={{ padding: "10px 8px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                        {money2(n(e.amount))}
                      </td>
                      <td
                        style={{
                          padding: "10px 8px",
                          textAlign: "right",
                          color: "rgba(255,255,255,0.65)", // dark-mode safe
                        }}
                      >
                        {e.createdAtTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </ResponsiveTable>
        )}
      </SectionCard>
    </PageShell>
  );
}
