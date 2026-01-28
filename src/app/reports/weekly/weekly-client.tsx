"use client";

import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { exportWeeklyCSV } from "./export";

type Store = { id: string; name: string };
type DayRow = { date: string; sales: string; cash: string; gcash: string; expenses: string; net: string };
type Summary = { totalSales: string; totalCash: string; totalGCash: string; totalExpenses: string; net: string };

function n(v: unknown): number {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}
function deltaSign(delta?: string) {
  if (!delta) return "";
  if (delta.startsWith("+")) return "▲";
  if (delta.startsWith("-")) return "▼";
  return "";
}

const PIE_COLORS = ["#22c55e", "#3b82f6", "#a855f7", "#f59e0b", "#ef4444", "#14b8a6", "#6366f1"];

function KpiCard(props: { label: string; value: string; color: string; delta?: string }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)",
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: isDark ? 0.18 : 0.1,
          background: `linear-gradient(135deg, ${props.color} 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <CardContent sx={{ position: "relative" }}>
        <Typography sx={{ opacity: 0.75, fontWeight: 800, fontSize: 12 }}>{props.label}</Typography>
        <Typography sx={{ mt: 0.5, fontWeight: 950, fontSize: 26, letterSpacing: -0.5, color: props.color }}>
          {props.value}
        </Typography>
        {props.delta ? (
          <Typography sx={{ mt: 0.5, opacity: 0.75, fontSize: 12 }}>
            {deltaSign(props.delta)} {props.delta}
          </Typography>
        ) : (
          <Box sx={{ height: 18 }} />
        )}
      </CardContent>
    </Card>
  );
}

function PieBlock(props: { title: string; data: { name: string; value: number }[] }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)",
        borderRadius: 3,
        height: 360,
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Typography fontWeight={950} sx={{ mb: 1 }}>
          {props.title}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {props.data.length === 0 ? (
          <Typography sx={{ opacity: 0.75 }}>No data.</Typography>
        ) : (
          <Box sx={{ height: 270 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={props.data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={55}
                  paddingAngle={2}
                >
                  {props.data.map((_, idx) => (
                    <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default function ReportsClient(props: {
  title?: string; // ✅ new
  stores: Store[];
  initialStoreId: string;
  initialFromISO: string;
  initialToISO: string;

  summary?: Summary;
  comparison?: {
    totalSalesDelta?: string;
    totalCashDelta?: string;
    totalGCashDelta?: string;
    totalExpensesDelta?: string;
    netDelta?: string;
  };

  days?: DayRow[];
  mode?: "page" | "dashboard";
}) {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const mode = props.mode ?? "page";

  const title = props.title ?? "Sales Report";

  const summarySafe: Summary = props.summary ?? {
    totalSales: "0.00",
    totalCash: "0.00",
    totalGCash: "0.00",
    totalExpenses: "0.00",
    net: "0.00",
  };

  const days = props.days ?? [];

  const [storeId, setStoreId] = React.useState(props.initialStoreId);
  const [fromISO, setFromISO] = React.useState(props.initialFromISO);
  const [toISO, setToISO] = React.useState(props.initialToISO);
  const [compare, setCompare] = React.useState(false);

  const canRun = Boolean(storeId) && Boolean(fromISO) && Boolean(toISO);

  function apply() {
    if (!canRun) return;
    router.push(
      `/reports/weekly?storeId=${encodeURIComponent(storeId)}&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}&compare=${compare}`
    );
    router.refresh();
  }

  function exportCSV() {
    if (!canRun) return;
    // Use a server action + blob download (more reliable than a Route Handler and avoids 404s)
    exportWeeklyCSV(storeId, fromISO, toISO)
      .then((res) => {
        const blob = new Blob([res.content], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = res.filename;
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((e) => {
        console.error("Export failed", e);
        alert("Export failed. Please try again.");
      });
  }

  function generatePDF() {
    if (!canRun) return;
    const url = `/reports/weekly/pdf?storeId=${encodeURIComponent(storeId)}&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}`;
    // Open a print-friendly report page. User can “Save as PDF”.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const paymentPie = React.useMemo(() => {
    const cash = n(summarySafe.totalCash);
    const gcash = n(summarySafe.totalGCash);
    const out: { name: string; value: number }[] = [];
    if (cash > 0) out.push({ name: "Cash", value: cash });
    if (gcash > 0) out.push({ name: "GCash", value: gcash });
    return out;
  }, [summarySafe.totalCash, summarySafe.totalGCash]);

  const allocationPie = React.useMemo(() => {
    const sales = n(summarySafe.totalSales);
    const expenses = n(summarySafe.totalExpenses);
    const net = Math.max(0, sales - expenses);
    const out: { name: string; value: number }[] = [];
    if (expenses > 0) out.push({ name: "Expenses", value: expenses });
    if (net > 0) out.push({ name: "Net", value: net });
    return out;
  }, [summarySafe.totalSales, summarySafe.totalExpenses]);

  const border = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)";
  const zebraA = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const zebraB = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h4" fontWeight={950}>
            {title}
          </Typography>
          <Typography sx={{ opacity: 0.7 }}>
            {fromISO} to {toISO}
          </Typography>
        </Box>

        {mode === "dashboard" ? (
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                `/reports/weekly?storeId=${encodeURIComponent(storeId)}&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}`
              )
            }
          >
            Open Reports
          </Button>
        ) : null}
      </Stack>

      {mode === "page" ? (
        <Card variant="outlined" sx={{ borderColor: border, mt: 2, borderRadius: 3 }}>
          <CardContent>
            <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 800, opacity: 0.75 }}>Store</Typography>
                <select
                  value={storeId}
                  onChange={(e) => setStoreId(e.target.value)}
                  style={{ padding: "6px 10px", borderRadius: 8 }}
                >
                  {props.stores.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </Box>

              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 800, opacity: 0.75 }}>From</Typography>
                <input
                  type="date"
                  value={fromISO}
                  onChange={(e) => setFromISO(e.target.value)}
                  style={{ padding: "6px 10px", borderRadius: 8 }}
                />
              </Box>

              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 800, opacity: 0.75 }}>To</Typography>
                <input
                  type="date"
                  value={toISO}
                  onChange={(e) => setToISO(e.target.value)}
                  style={{ padding: "6px 10px", borderRadius: 8 }}
                />
              </Box>

              <FormControlLabel
                control={<Checkbox checked={compare} onChange={(e) => setCompare(e.target.checked)} />}
                label="Compare with previous period"
                sx={{ ml: 1 }}
              />

              <Box sx={{ flex: 1 }} />
              <Button variant="contained" onClick={apply} disabled={!canRun}>
                Apply
              </Button>
              <Button variant="outlined" onClick={exportCSV} disabled={!canRun}>
                Export CSV
              </Button>
              <Button variant="outlined" onClick={generatePDF} disabled={!canRun}>
                Generate PDF
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : null}

      <Box sx={{ mt: 2, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(5, 1fr)" }, gap: 2 }}>
        <KpiCard label="Total Sales" value={summarySafe.totalSales} color="#3b82f6" delta={props.comparison?.totalSalesDelta} />
        <KpiCard label="Cash" value={summarySafe.totalCash} color="#22c55e" delta={props.comparison?.totalCashDelta} />
        <KpiCard label="GCash" value={summarySafe.totalGCash} color="#a855f7" delta={props.comparison?.totalGCashDelta} />
        <KpiCard label="Expenses" value={summarySafe.totalExpenses} color="#ef4444" delta={props.comparison?.totalExpensesDelta} />
        <KpiCard label="Net" value={summarySafe.net} color="#f59e0b" delta={props.comparison?.netDelta} />
      </Box>

      <Box sx={{ mt: 2, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
        <PieBlock title="Payment Mix (Cash vs GCash)" data={paymentPie} />
        <PieBlock title="Sales Allocation (Expenses vs Net)" data={allocationPie} />
      </Box>

      <Card variant="outlined" sx={{ borderColor: border, mt: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography fontWeight={950}>Daily Breakdown</Typography>
          <Divider sx={{ my: 2 }} />

          {days.length === 0 ? (
            <Typography sx={{ opacity: 0.75 }}>No data for selected range.</Typography>
          ) : (
            <ResponsiveTable minWidth={820}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "inherit" }}>
                <thead>
                  <tr>
                    <th align="left">Date</th>
                    <th align="right">Sales</th>
                    <th align="right">Cash</th>
                    <th align="right">GCash</th>
                    <th align="right">Expenses</th>
                    <th align="right">Net</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((d, i) => (
                    <tr key={d.date} style={{ background: i % 2 === 0 ? zebraA : zebraB }}>
                      <td>{d.date}</td>
                      <td align="right">{d.sales}</td>
                      <td align="right">{d.cash}</td>
                      <td align="right">{d.gcash}</td>
                      <td align="right">{d.expenses}</td>
                      <td align="right">{d.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ResponsiveTable>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
