"use client";

import * as React from "react";
import { useMemo, useState, useTransition } from "react";
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
import { saveDailyRemittance } from "./actions";

type Store = { id: string; name: string };

type Initial =
  | null
  | {
      storeId: string;
      dateISO: string;
      cash: string;
      gcash: string;
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

  // Seed values from initial (if exists)
  const [cash, setCash] = useState<string>(props.initial?.cash ?? "0");
  const [gcash, setGcash] = useState<string>(props.initial?.gcash ?? "0");
  const [notes, setNotes] = useState<string>(props.initial?.notes ?? "");

  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const selectedStoreName = useMemo(
    () => props.stores.find((s) => s.id === storeId)?.name ?? "-",
    [props.stores, storeId]
  );

  const total = useMemo(() => {
    return toNum(cash) + toNum(gcash);
  }, [cash, gcash]);

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
    setNotes("");

    navigate(v, dateISO);
  };

  const onChangeDate = (nextDateISO: string) => {
    const v = (nextDateISO ?? "").toString();
    setDateISO(v);

    setCash("0");
    setGcash("0");
    setNotes("");

    navigate(storeId, v);
  };

  const onSave = () => {
    const payload = {
      storeId,
      dateISO,
      cash: normalizeMoneyString(cash),
      gcash: normalizeMoneyString(gcash),
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
            <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 320 }}>
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
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />
            <Chip
              size="small"
              label={`Date: ${dateISO}`}
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            />

            {isAdmin && (
              <Stack spacing={0} sx={{ textAlign: "right", mr: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Total Remitted
                </Typography>
                <Typography variant="h6" fontWeight={900} sx={{ lineHeight: 1.1 }}>
                  {money2(total)}
                </Typography>
              </Stack>
            )}

            <Button
              variant="contained"
              onClick={onSave}
              disabled={isPending || !storeId || !dateISO}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {isPending ? "Saving..." : "Save"}
            </Button>
          </Stack>
        }
      >
        <SectionCard title="Remittance Entry" tip="Tip: Enter amounts then click Save.">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800, width: 180 }}>Cash</TableCell>
                <TableCell sx={{ fontWeight: 800, width: 180 }}>GCash</TableCell>
                {isAdmin && <TableCell sx={{ fontWeight: 800, width: 180 }}>Total</TableCell>}
                <TableCell sx={{ fontWeight: 800 }}>Notes</TableCell>
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
                    disabled={isPending}
                    sx={{ width: 140 }}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    value={gcash}
                    onChange={(e) => setGcash(e.target.value)}
                    size="small"
                    inputProps={{ inputMode: "decimal" }}
                    placeholder="0"
                    disabled={isPending}
                    sx={{ width: 140 }}
                  />
                </TableCell>

                {isAdmin && (
                  <TableCell sx={{ fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>
                    {money2(total)}
                  </TableCell>
                )}

                <TableCell>
                  <TextField
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    size="small"
                    placeholder="Optional notes..."
                    disabled={isPending}
                    fullWidth
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

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
