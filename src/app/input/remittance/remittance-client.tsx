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
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { saveDailyRemittance } from "./actions";

type Store = { id: string; name: string };

type Initial =
  | null
  | {
      storeId: string;
      dateISO: string;
      cash: string;
      gcash: string;
      discountedQty: string;
      notes: string;
    };

function money2(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toNum(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizeMoneyString(v: string) {
  const t = (v ?? "").trim();
  return t === "" ? "0" : t;
}

function todayISOManila() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export default function RemittanceClient(props: {
  stores: Store[];
  initialStoreId: string;
  initialDateISO: string;
  initial: Initial;
  isStaff: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isAdmin = !props.isStaff;

  // Keep these ALWAYS strings to avoid uncontrolled/controlled warnings
  const safeInitialStoreId =
    (props.initialStoreId ?? "").trim() || props.stores[0]?.id || "";
  const safeInitialDateISO = (props.initialDateISO ?? "").trim() || "";

  const [storeId, setStoreId] = useState<string>(safeInitialStoreId);
  const [dateISO, setDateISO] = useState<string>(safeInitialDateISO);

  const staffLocked = props.isStaff && dateISO !== todayISOManila();

  // Seed values from initial (if exists)
  const [cash, setCash] = useState<string>(props.initial?.cash ?? "0");
  const [gcash, setGcash] = useState<string>(props.initial?.gcash ?? "0");
  const [discountedQty, setDiscountedQty] = useState<string>(props.initial?.discountedQty ?? "0");
  const [notes, setNotes] = useState<string>(props.initial?.notes ?? "");

  // ✅ Resync when server-provided initial changes after navigation (store/date change)
  useEffect(() => {
    setCash(props.initial?.cash ?? "0");
    setGcash(props.initial?.gcash ?? "0");
    setDiscountedQty(props.initial?.discountedQty ?? "0");
    setNotes(props.initial?.notes ?? "");
  }, [props.initial?.cash, props.initial?.gcash, props.initial?.discountedQty, props.initial?.notes]);

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const selectedStoreName = useMemo(
    () => props.stores.find((s) => s.id === storeId)?.name ?? "-",
    [props.stores, storeId]
  );

  // Gross remitted input sum (cash + gcash)
  const gross = useMemo(() => {
    return toNum(cash) + toNum(gcash);
  }, [cash, gcash]);

  // Discount amount = discountedQty * 9
  const discountAmount = useMemo(() => {
    const qty = Math.max(0, Math.floor(toNum(discountedQty)));
    return qty * 9;
  }, [discountedQty]);

  // ✅ Total Remitted (net) = (cash + gcash) - discount
  const totalRemitted = useMemo(() => {
    return Math.max(0, gross - discountAmount);
  }, [gross, discountAmount]);

  // Navigate so server refetches `initial` for that store/date
  const navigate = (nextStoreId: string, nextDateISO: string) => {
    startTransition(() => {
      router.push(
        `/input/remittance?storeId=${encodeURIComponent(nextStoreId)}&date=${encodeURIComponent(
          nextDateISO
        )}`
      );
      router.refresh();
    });
  };

  const onChangeStore = (nextStoreId: string) => {
    const v = (nextStoreId ?? "").toString();
    setStoreId(v);

    // reset locally (will be replaced after navigation)
    setCash("0");
    setGcash("0");
    setDiscountedQty("0");
    setNotes("");

    navigate(v, dateISO);
  };

  const onChangeDate = (nextDateISO: string) => {
    const v = (nextDateISO ?? "").toString();
    setDateISO(v);

    setCash("0");
    setGcash("0");
    setDiscountedQty("0");
    setNotes("");

    navigate(storeId, v);
  };

  const onSave = () => {
    if (staffLocked) {
      setSnack({ open: true, type: "error", message: "Staff can only save remittance for today." });
      return;
    }
    const payload = {
      storeId,
      dateISO,
      cash: normalizeMoneyString(cash),
      gcash: normalizeMoneyString(gcash),
      discountedQty: String(Math.max(0, Math.floor(toNum(discountedQty)))),
      notes: notes ?? "",
    };

    startTransition(async () => {
      try {
        const res = await saveDailyRemittance(payload);

        if (!res?.ok) throw new Error("SAVE_FAILED");

        setSnack({
          open: true,
          type: "success",
          message: "Remittance saved successfully.",
        });

        router.refresh();
      } catch (e: any) {
        console.error(e);

        const msg = typeof e?.message === "string" ? e.message : "";
        if (msg === "UNAUTHORIZED") {
          setSnack({ open: true, type: "error", message: "Unauthorized. Please log in again." });
          return;
        }
        if (msg === "INVALID_INPUT") {
          setSnack({ open: true, type: "error", message: "Missing store or date." });
          return;
        }
        if (msg === "INVALID_DATE") {
          setSnack({ open: true, type: "error", message: "Invalid date." });
          return;
        }

        if (msg === "STAFF_TODAY_ONLY") {
          setSnack({ open: true, type: "error", message: "Staff can only save remittance for today." });
          return;
        }

        setSnack({ open: true, type: "error", message: "Failed to save remittance." });
      }
    });
  };

  return (
    <>
      <PageShell
        title="Remittance"
        subtitle="Record daily remittance amounts (Cash and GCash)."
        headerLeft={
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ minWidth: { xs: "100%", sm: 320 } }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ minWidth: 42 }}>
                Store
              </Typography>
              <FormControl size="small" sx={{ minWidth: 220 }}>
                <Select
                  value={storeId}
                  onChange={(e) => onChangeStore(String(e.target.value))}
                  displayEmpty
                  disabled={isPending || props.stores.length === 0}
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
              label={`Store: ${selectedStoreName}`}
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

            {isAdmin && (
              <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Total Remitted
                </Typography>
                <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
                  {money2(totalRemitted)}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.8 }}>
                  Gross: {money2(gross)} − Disc: {money2(discountAmount)}
                </Typography>
              </Stack>
            )}

            <Button
              variant="contained"
              onClick={onSave}
              disabled={isPending || staffLocked || !storeId || !dateISO}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {isPending ? "Saving..." : "Save"}
            </Button>
          </Stack>
        }
      >
        {staffLocked && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Staff can only save remittance for <b>today</b> ({todayISOManila()}).
          </Alert>
        )}
        <SectionCard title="Remittance Entry" tip="Tip: Enter amounts then click Save.">
          <ResponsiveTable minWidth={780}>
            <Table size="small" sx={{ minWidth: "inherit" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800, width: 180, whiteSpace: "nowrap" }}>
                    Cash
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 180, whiteSpace: "nowrap" }}>
                    GCash
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 160, whiteSpace: "nowrap" }}>
                    Discounted Qty
                  </TableCell>
                  <TableCell sx={{ fontWeight: 800, width: 180, whiteSpace: "nowrap" }}>
                    Discount (₱)
                  </TableCell>
                  {isAdmin && (
                    <TableCell sx={{ fontWeight: 800, width: 180, whiteSpace: "nowrap" }}>
                      Total
                    </TableCell>
                  )}
                  <TableCell sx={{ fontWeight: 800, whiteSpace: "nowrap" }}>Notes</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow hover>
                  <TableCell>
                    <TextField
                      value={cash}
                      onChange={(e) => setCash(e.target.value)}
                      size="small"
                      inputProps={{ inputMode: "decimal" }}
                      placeholder="0"
                      disabled={isPending || staffLocked}
                      sx={{ width: { xs: 120, sm: 140 } }}
                    />
                  </TableCell>

                  <TableCell>
                    <TextField
                      value={gcash}
                      onChange={(e) => setGcash(e.target.value)}
                      size="small"
                      inputProps={{ inputMode: "decimal" }}
                      placeholder="0"
                      disabled={isPending || staffLocked}
                      sx={{ width: { xs: 120, sm: 140 } }}
                    />
                  </TableCell>

                  <TableCell>
                    <TextField
                      value={discountedQty}
                      onChange={(e) => setDiscountedQty(e.target.value)}
                      size="small"
                      inputProps={{ inputMode: "numeric" }}
                      placeholder="0"
                      disabled={isPending || staffLocked}
                      sx={{ width: { xs: 110, sm: 130 } }}
                    />
                  </TableCell>

                  <TableCell sx={{ fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>
                    {money2(discountAmount)}
                  </TableCell>

                  {isAdmin && (
                    <TableCell sx={{ fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>
                      {money2(totalRemitted)}
                    </TableCell>
                  )}

                  <TableCell>
                    <TextField
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      size="small"
                      placeholder="Optional notes..."
                      disabled={isPending || staffLocked}
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ResponsiveTable>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
            {props.initial ? "Loaded existing entry for this date." : "No existing entry yet for this date."}
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
