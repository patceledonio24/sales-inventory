import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decimalToNumber } from "@/lib/serialize";
import AutoPrint from "./auto-print";

type StoreDTO = { id: string; name: string };

type DayRow = {
  date: string;
  salesGross: number;
  discountQty: number;
  discountAmount: number;
  salesNet: number;
  cash: number;
  gcash: number;
  expenses: number;
  net: number;
};

type Summary = {
  totalSalesGross: number;
  totalDiscountQty: number;
  totalDiscountAmount: number;
  totalSalesNet: number;
  totalCash: number;
  totalGCash: number;
  totalExpenses: number;
  net: number;
};

type TopProduct = {
  name: string;
  qty: number;
  salesGross: number;
};

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}
function startOfDayUTC(d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}
function addDaysUTC(d: Date, days: number) {
  const x = new Date(d);
  x.setUTCDate(x.getUTCDate() + days);
  return x;
}
function parseISODate(iso: string | undefined, fallback: Date) {
  if (!iso) return fallback;
  const d = new Date(iso + "T00:00:00.000Z");
  return Number.isNaN(d.getTime()) ? fallback : d;
}
function diffDaysInclusiveUTC(from: Date, to: Date) {
  const ms = startOfDayUTC(to).getTime() - startOfDayUTC(from).getTime();
  return Math.floor(ms / (24 * 60 * 60 * 1000)) + 1;
}
function fmtMoney(n: number) {
  return new Intl.NumberFormat("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

async function computeRange(
  storeId: string,
  from: Date,
  to: Date
): Promise<{ summary: Summary; days: DayRow[]; top: TopProduct[] }> {
  const entries = await prisma.dailyInventoryEntry.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, productId: true, salesQty: true, srpSnapshot: true },
  });

  const remits = await prisma.dailyRemittance.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, cash: true, gcash: true, discountedQty: true },
  });

  const expenses = await prisma.dailyExpense.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, amount: true },
  });

  const byDay = new Map<
    string,
    { salesGross: number; discountQty: number; cash: number; gcash: number; expenses: number }
  >();

  const ensure = (k: string) => {
    if (!byDay.has(k)) byDay.set(k, { salesGross: 0, discountQty: 0, cash: 0, gcash: 0, expenses: 0 });
    return byDay.get(k)!;
  };

  // Gross sales from inventory (qty × SRP)
  for (const r of entries) {
    const k = isoDateOnly(r.date);
    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    ensure(k).salesGross += (Number.isFinite(qty) ? qty : 0) * srp;
  }

  // Remittance + discount qty (captured at remittance level)
  for (const r of remits) {
    const k = isoDateOnly(r.date);
    ensure(k).cash += decimalToNumber(r.cash, 0);
    ensure(k).gcash += decimalToNumber(r.gcash, 0);
    ensure(k).discountQty += Math.max(0, Number((r as any).discountedQty ?? 0));
  }

  for (const r of expenses) {
    const k = isoDateOnly(r.date);
    ensure(k).expenses += decimalToNumber(r.amount, 0);
  }

  const daysCount = diffDaysInclusiveUTC(from, to);
  const days: DayRow[] = Array.from({ length: daysCount }).map((_, i) => {
    const d = addDaysUTC(from, i);
    const k = isoDateOnly(d);
    const v = ensure(k);

    const discountAmount = v.discountQty * 9;
    const salesNet = v.salesGross - discountAmount;
    const net = salesNet - v.expenses;

    return {
      date: k,
      salesGross: v.salesGross,
      discountQty: v.discountQty,
      discountAmount,
      salesNet,
      cash: v.cash,
      gcash: v.gcash,
      expenses: v.expenses,
      net,
    };
  });

  const summary: Summary = {
    totalSalesGross: days.reduce((s, r) => s + r.salesGross, 0),
    totalDiscountQty: days.reduce((s, r) => s + r.discountQty, 0),
    totalDiscountAmount: days.reduce((s, r) => s + r.discountAmount, 0),
    totalSalesNet: days.reduce((s, r) => s + r.salesNet, 0),
    totalCash: days.reduce((s, r) => s + r.cash, 0),
    totalGCash: days.reduce((s, r) => s + r.gcash, 0),
    totalExpenses: days.reduce((s, r) => s + r.expenses, 0),
    net: 0,
  };
  summary.net = summary.totalSalesNet - summary.totalExpenses;

  // Top products (by qty sold)
  const byProd = new Map<string, { qty: number; salesGross: number }>();
  for (const r of entries) {
    const pid = r.productId;
    if (!pid) continue;
    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    if (!byProd.has(pid)) byProd.set(pid, { qty: 0, salesGross: 0 });
    const v = byProd.get(pid)!;
    v.qty += Number.isFinite(qty) ? qty : 0;
    v.salesGross += (Number.isFinite(qty) ? qty : 0) * srp;
  }

  const productIds = Array.from(byProd.keys());
  const products = productIds.length
    ? await prisma.product.findMany({ where: { id: { in: productIds } }, select: { id: true, name: true } })
    : [];
  const nameById = new Map(products.map((p) => [p.id, p.name] as const));

  const top: TopProduct[] = Array.from(byProd.entries())
    .map(([id, v]) => ({ name: nameById.get(id) ?? "(Unknown)", qty: v.qty, salesGross: v.salesGross }))
    .sort((a, b) => (b.qty - a.qty) || (b.salesGross - a.salesGross))
    .slice(0, 12);

  return { summary, days, top };
}

export default async function WeeklyPdfPage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string; from?: string; to?: string }>;
}) {
  const sp = await searchParams;

  const session = await getServerSession(authOptions);
  if ((session?.user as any)?.role !== "ADMIN") {
    return <div style={{ padding: 24 }}>Unauthorized</div>;
  }

  const stores: StoreDTO[] = await prisma.store.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });
  if (stores.length === 0) {
    return <div style={{ padding: 24 }}>No active stores found.</div>;
  }

  const storeId = (sp.storeId && stores.some((s) => s.id === sp.storeId) && sp.storeId) || stores[0].id;
  const storeName = stores.find((s) => s.id === storeId)?.name ?? "";

  const today = startOfDayUTC(new Date());
  const defaultTo = today;
  const defaultFrom = addDaysUTC(today, -6);

  const from = startOfDayUTC(parseISODate(sp.from, defaultFrom));
  const to = startOfDayUTC(parseISODate(sp.to, defaultTo));

  const safeFrom = from.getTime() <= to.getTime() ? from : to;
  const safeTo = from.getTime() <= to.getTime() ? to : from;

  const { summary, days, top } = await computeRange(storeId, safeFrom, safeTo);

  const logoSrc = storeName.toLowerCase().includes("commissary")
    ? "/commissary-logo.png"
    : "/mr-liempo-logo.png";

  const generatedAt = new Intl.DateTimeFormat("en-PH", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const css = `
    :root {
      --ink: #0b1220;
      --muted: #5b6472;
      --line: #e6e8ee;
      --card: #ffffff;
      --soft: #f6f7fb;
    }

    /* Hide app chrome for this "PDF" page (AppShell) */
    .MuiAppBar-root, .MuiDrawer-root, .MuiToolbar-root {
      display: none !important;
    }
    main {
      padding: 0 !important;
    }

    /* ===== A4 sizing =====
      A4 = 210mm x 297mm
      With margins handled by @page in print.
    */
    html, body {
      background: var(--soft) !important;
      color: var(--ink);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .pdf-root {
      padding: 18px;
      display: flex;
      justify-content: center;
    }

    /* Screen preview: show an A4 sheet */
    .page {
      width: 210mm;
      min-height: 297mm;
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 18mm; /* inner margin */
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
      overflow: hidden;
    }

    .header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--line);
    }
    .brand { display: flex; gap: 14px; align-items: center; }
    .logo-wrap {
      width: 180px; height: 64px;
      display: flex; align-items: center; justify-content: center;
      background: #fff;
      border-radius: 14px;
      border: 1px solid var(--line);
      padding: 6px 10px;
      box-sizing: border-box;
    }
    .h1 {
      font-size: 18px;
      font-weight: 900;
      letter-spacing: -0.2px;
      margin: 0;
    }
    .muted { color: var(--muted); font-size: 11px; }
    .meta { text-align: right; }
    .pill {
      display: inline-block;
      background: var(--soft);
      border: 1px solid var(--line);
      padding: 5px 9px;
      border-radius: 999px;
      font-size: 11px;
      margin-left: 6px;
      margin-bottom: 6px;
      white-space: nowrap;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 9px;
      margin-top: 12px;
    }
    .card {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 10px 12px;
      background: linear-gradient(180deg, #ffffff, #fbfbfe);
    }
    .k { font-size: 11px; color: var(--muted); font-weight: 800; }
    .v { font-size: 16px; font-weight: 900; margin-top: 3px; }
    .s { font-size: 11px; color: var(--muted); margin-top: 3px; }

    .section { margin-top: 14px; }
    .section-title {
      font-weight: 900;
      margin: 10px 0 7px;
      letter-spacing: -0.2px;
      font-size: 13px;
    }

    .tbl {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--line);
      border-radius: 14px;
      overflow: hidden;
      font-size: 11px;
    }
    .tbl th, .tbl td { padding: 8px 9px; border-bottom: 1px solid var(--line); }
    .tbl thead th {
      background: #0b1220;
      color: #fff;
      font-weight: 900;
    }
    .tbl tbody tr:nth-child(even) td { background: #fafbff; }
    .tbl tfoot td { background: #f0f3ff; font-weight: 900; }

    .num { text-align: right; font-variant-numeric: tabular-nums; }

    .footer {
      margin-top: 14px;
      padding-top: 10px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* Keep tables from splitting rows awkwardly */
    tr, td, th { page-break-inside: avoid; }

    /* ===== Print rules ===== */
    @media print {
      /* Use the printer's A4 with our margins */
      @page { size: A4; margin: 14mm; }

      html, body { background: #fff !important; }
      .pdf-root { padding: 0 !important; }

      /* Let the paper handle size; remove borders/shadows */
      .page {
        width: auto;
        min-height: auto;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0; /* use @page margin instead */
      }

      /* If a table is too long, allow breaking between rows (still avoids inside row) */
      table { page-break-inside: auto; }
      tr { page-break-inside: avoid; page-break-after: auto; }
    }
  `;


  return (
    <div className="pdf-root">
      {/* Auto-open print dialog in the new tab */}
      <AutoPrint />

      <div className="page">
        <header className="header">
          <div className="brand">
            <div className="logo-wrap">
              <Image src={logoSrc} alt="Logo" width={180} height={72} priority />
            </div>
            <div className="title">
              <div className="h1">Weekly Sales & Inventory Report</div>
              <div className="muted">Store: {storeName}</div>
            </div>
          </div>

          <div className="meta">
            <div className="pill">From: {isoDateOnly(safeFrom)}</div>
            <div className="pill">To: {isoDateOnly(safeTo)}</div>
            <div className="muted" style={{ marginTop: 6 }}>
              Generated: {generatedAt}
            </div>
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <div className="k">Net Sales</div>
            <div className="v">₱ {fmtMoney(summary.totalSalesNet)}</div>
            <div className="s">Gross: ₱ {fmtMoney(summary.totalSalesGross)}</div>
          </div>
          <div className="card">
            <div className="k">Discounts</div>
            <div className="v">₱ {fmtMoney(summary.totalDiscountAmount)}</div>
            <div className="s">Qty: {summary.totalDiscountQty}</div>
          </div>
          <div className="card">
            <div className="k">Expenses</div>
            <div className="v">₱ {fmtMoney(summary.totalExpenses)}</div>
            <div className="s">—</div>
          </div>
          <div className="card">
            <div className="k">Net</div>
            <div className="v">₱ {fmtMoney(summary.net)}</div>
            <div className="s">Net Sales − Expenses</div>
          </div>
          <div className="card">
            <div className="k">Cash</div>
            <div className="v">₱ {fmtMoney(summary.totalCash)}</div>
            <div className="s">—</div>
          </div>
          <div className="card">
            <div className="k">GCash</div>
            <div className="v">₱ {fmtMoney(summary.totalGCash)}</div>
            <div className="s">—</div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Daily Breakdown</div>
          <table className="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th className="num">Gross Sales</th>
                <th className="num">Discount</th>
                <th className="num">Net Sales</th>
                <th className="num">Cash</th>
                <th className="num">GCash</th>
                <th className="num">Expenses</th>
                <th className="num">Net</th>
              </tr>
            </thead>
            <tbody>
              {days.map((r) => (
                <tr key={r.date}>
                  <td>{r.date}</td>
                  <td className="num">₱ {fmtMoney(r.salesGross)}</td>
                  <td className="num">₱ {fmtMoney(r.discountAmount)}</td>
                  <td className="num">₱ {fmtMoney(r.salesNet)}</td>
                  <td className="num">₱ {fmtMoney(r.cash)}</td>
                  <td className="num">₱ {fmtMoney(r.gcash)}</td>
                  <td className="num">₱ {fmtMoney(r.expenses)}</td>
                  <td className="num">₱ {fmtMoney(r.net)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td className="num">₱ {fmtMoney(summary.totalSalesGross)}</td>
                <td className="num">₱ {fmtMoney(summary.totalDiscountAmount)}</td>
                <td className="num">₱ {fmtMoney(summary.totalSalesNet)}</td>
                <td className="num">₱ {fmtMoney(summary.totalCash)}</td>
                <td className="num">₱ {fmtMoney(summary.totalGCash)}</td>
                <td className="num">₱ {fmtMoney(summary.totalExpenses)}</td>
                <td className="num">₱ {fmtMoney(summary.net)}</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section className="section" style={{ marginTop: 18 }}>
          <div className="section-title">Top Products (by Qty Sold)</div>
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Product</th>
                <th className="num" style={{ width: "20%" }}>
                  Qty
                </th>
                <th className="num" style={{ width: "20%" }}>
                  Gross Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {top.length === 0 ? (
                <tr>
                  <td colSpan={3} className="muted">
                    No inventory sales found for this range.
                  </td>
                </tr>
              ) : (
                top.map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.name}</td>
                    <td className="num">{p.qty}</td>
                    <td className="num">₱ {fmtMoney(p.salesGross)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>

        <footer className="footer">
          <div className="muted">This report is system-generated for internal use.</div>
        </footer>
      </div>

      {/* ✅ plain style tag (no styled-jsx), and no <html>/<body> tags */}
      <style>{css}</style>
    </div>
  );
}
