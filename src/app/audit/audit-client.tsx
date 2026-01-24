"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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

  const [storeId, setStoreId] = useState(props.initialStoreId);
  const [dateISO, setDateISO] = useState(props.initialDateISO);

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark((localStorage.getItem("mui-color-mode") ?? "light") === "dark");
  }, []);

  const storeName = useMemo(
    () => props.stores.find((s) => s.id === storeId)?.name ?? "",
    [props.stores, storeId]
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
     THEME TOKENS
  ======================== */
  const text = isDark ? "#ffffff" : "#111111";
  const muted = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";
  const border = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";
  const bg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";

  const zebraA = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const zebraB = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const hoverBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  /* =======================
     STATUS LOGIC (REVERTED)
     totalSales > cash+gcash+expenses => SHORT
     cash+gcash+expenses > totalSales => OVER
     equal => BALANCED
  ======================== */
  const totalSalesNum = money(props.totals.totalSales);
  const cashNum = money(props.totals.cash);
  const gcashNum = money(props.totals.gcash);
  const expensesNum = money(props.totals.expenses);

  const sumIn = cashNum + gcashNum + expensesNum;
  const diff = sumIn - totalSalesNum;

  const statusLabel: DisplayStatus =
    diff < 0 ? "SHORT" : diff > 0 ? "OVER" : "BALANCED";

  const highlight: "red" | "orange" | "green" =
    statusLabel === "SHORT" ? "red" : statusLabel === "OVER" ? "orange" : "green";

  const remainingDisplay =
    statusLabel === "SHORT"
      ? `-${props.totals.remainingAbs}`
      : props.totals.remainingAbs;

  const pillStyle: React.CSSProperties = (() => {
    const base: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: 0.4,
      border: `1px solid ${border}`,
      whiteSpace: "nowrap",
    };

    if (highlight === "red") {
      return {
        ...base,
        color: isDark ? "#ffb4b4" : "#8b0000",
        background: isDark ? "rgba(255,77,77,0.20)" : "rgba(255,77,77,0.12)",
        borderColor: isDark ? "rgba(255,77,77,0.45)" : "rgba(255,77,77,0.30)",
      };
    }

    if (highlight === "orange") {
      return {
        ...base,
        color: isDark ? "#ffd7a0" : "#8a4b00",
        background: isDark ? "rgba(255,159,10,0.22)" : "rgba(255,159,10,0.14)",
        borderColor: isDark ? "rgba(255,159,10,0.45)" : "rgba(255,159,10,0.32)",
      };
    }

    return {
      ...base,
      color: isDark ? "#b6f3c5" : "#0b6b37",
      background: isDark ? "rgba(52,199,89,0.22)" : "rgba(52,199,89,0.12)",
      borderColor: isDark ? "rgba(52,199,89,0.45)" : "rgba(52,199,89,0.30)",
    };
  })();

  const remainingRowBg =
    highlight === "red"
      ? isDark
        ? "rgba(255,77,77,0.14)"
        : "rgba(255,77,77,0.08)"
      : highlight === "orange"
      ? isDark
        ? "rgba(255,159,10,0.14)"
        : "rgba(255,159,10,0.08)"
      : isDark
      ? "rgba(52,199,89,0.14)"
      : "rgba(52,199,89,0.08)";

  return (
    <div style={{ maxWidth: 980, color: text }}>
      {/* Filters */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "end" }}>
        <label>
          <div style={{ color: muted, fontSize: 12, fontWeight: 800 }}>Store</div>
          <select
            value={storeId}
            onChange={(e) => {
              setStoreId(e.target.value);
              navigate(e.target.value, dateISO);
            }}
          >
            {props.stores.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div style={{ color: muted, fontSize: 12, fontWeight: 800 }}>Date</div>
          <input
            type="date"
            value={dateISO}
            onChange={(e) => {
              setDateISO(e.target.value);
              navigate(storeId, e.target.value);
            }}
          />
        </label>

        <button onClick={onExport} style={{ marginLeft: "auto" }} disabled={isPending}>
          Export CSV
        </button>
      </div>

      <div style={{ marginTop: 14, color: muted }}>
        <strong style={{ color: text }}>{storeName}</strong> — {dateISO}
      </div>

      {/* Totals */}
      <div
        style={{
          border: `1px solid ${border}`,
          background: bg,
          borderRadius: 14,
          padding: 16,
          marginTop: 14,
        }}
      >
        {[
          ["Total Sales", props.totals.totalSales],
          ["Cash", props.totals.cash],
          ["GCash", props.totals.gcash],
          ["Expenses", props.totals.expenses],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
            <span style={{ color: muted, fontWeight: 800 }}>{k}</span>
            <span style={{ fontWeight: 800 }}>{v}</span>
          </div>
        ))}

        {/* Remaining */}
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            background: remainingRowBg,
            border: `1px solid ${border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 900 }}>Remaining</span>
            <span style={pillStyle}>{statusLabel}</span>
          </div>

          <div style={{ fontWeight: 900 }}>{remainingDisplay}</div>
        </div>
      </div>

      {/* Expenses */}
      <div
        style={{
          border: `1px solid ${border}`,
          background: bg,
          borderRadius: 14,
          padding: 16,
          marginTop: 14,
        }}
      >
        <strong>Petty Cash / Expenses</strong>

        {props.expenses.length === 0 ? (
          <div style={{ color: muted, marginTop: 10 }}>No expenses.</div>
        ) : (
          <table style={{ width: "100%", marginTop: 10, borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th align="left">Description</th>
                <th align="right">Amount</th>
                <th align="right">Time</th>
              </tr>
            </thead>
            <tbody>
              {props.expenses.map((e, idx) => (
                <tr
                  key={e.id}
                  style={{
                    background: idx % 2 === 0 ? zebraA : zebraB,
                  }}
                  onMouseEnter={(ev) => {
                    ev.currentTarget.style.background = hoverBg;
                  }}
                  onMouseLeave={(ev) => {
                    ev.currentTarget.style.background = idx % 2 === 0 ? zebraA : zebraB;
                  }}
                >
                  <td>{e.description}</td>
                  <td align="right">{Number(e.amount).toFixed(2)}</td>
                  <td align="right" style={{ color: muted }}>
                    {e.createdAtTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
