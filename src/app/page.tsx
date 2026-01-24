import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { decimalToNumber } from "@/lib/serialize";
import ReportsClient from "@/app/reports/weekly/weekly-client";

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

function fmt2(n: number) {
  return n.toFixed(2);
}

/**
 * Returns [weekStartSundayUTC, weekEndSaturdayUTC] for the week containing `today`.
 * Week definition: Sunday 00:00:00 UTC -> Saturday 00:00:00 UTC (inclusive by date).
 */
function currentWeekSundayToSaturdayUTC(today: Date) {
  const t = startOfDayUTC(today);
  // JS: 0=Sunday ... 6=Saturday (based on UTC day)
  const dow = t.getUTCDay();
  const weekStart = addDaysUTC(t, -dow);
  const weekEnd = addDaysUTC(weekStart, 6);
  return { weekStart, weekEnd };
}

async function computeRange(storeId: string, from: Date, to: Date) {
  const entries = await prisma.dailyInventoryEntry.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, salesQty: true, srpSnapshot: true },
  });

  const remits = await prisma.dailyRemittance.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, cash: true, gcash: true },
  });

  const expenses = await prisma.dailyExpense.findMany({
    where: { storeId, date: { gte: from, lte: to } },
    select: { date: true, amount: true },
  });

  const byDay = new Map<string, { sales: number; cash: number; gcash: number; expenses: number }>();
  const ensure = (k: string) => {
    if (!byDay.has(k)) byDay.set(k, { sales: 0, cash: 0, gcash: 0, expenses: 0 });
    return byDay.get(k)!;
  };

  for (const r of entries) {
    const k = isoDateOnly(r.date);
    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    ensure(k).sales += qty * srp;
  }

  for (const r of remits) {
    const k = isoDateOnly(r.date);
    ensure(k).cash += decimalToNumber(r.cash, 0);
    ensure(k).gcash += decimalToNumber(r.gcash, 0);
  }

  for (const r of expenses) {
    const k = isoDateOnly(r.date);
    ensure(k).expenses += decimalToNumber(r.amount, 0);
  }

  // Build 7 rows (Sunday..Saturday) regardless of missing days
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = addDaysUTC(from, i);
    const k = isoDateOnly(d);
    const v = ensure(k);
    const net = v.sales - v.expenses;

    return {
      date: k,
      sales: fmt2(v.sales),
      cash: fmt2(v.cash),
      gcash: fmt2(v.gcash),
      expenses: fmt2(v.expenses),
      net: fmt2(net),
    };
  });

  const totalSales = days.reduce((s, r) => s + Number(r.sales), 0);
  const totalCash = days.reduce((s, r) => s + Number(r.cash), 0);
  const totalGCash = days.reduce((s, r) => s + Number(r.gcash), 0);
  const totalExpenses = days.reduce((s, r) => s + Number(r.expenses), 0);
  const net = totalSales - totalExpenses;

  return {
    summary: {
      totalSales: fmt2(totalSales),
      totalCash: fmt2(totalCash),
      totalGCash: fmt2(totalGCash),
      totalExpenses: fmt2(totalExpenses),
      net: fmt2(net),
    },
    days,
  };
}

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600 }}>Sales Inventory App</h1>
        <p style={{ marginTop: 12 }}>
          You are not signed in. <Link href="/login">Go to login</Link>
        </p>
      </div>
    );
  }

  // Fetch stores (same standard approach as reports page)
  const stores = await prisma.store.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  if (stores.length === 0) {
    return (
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600 }}>Sales Inventory App</h1>
        <p>No active stores found.</p>
      </div>
    );
  }

  // Default store for dashboard (you can later personalize per-user)
  const storeId = stores[0].id;

  // ✅ Fixed weekly window: Sunday -> Saturday (UTC)
  const { weekStart, weekEnd } = currentWeekSundayToSaturdayUTC(new Date());

  const current = await computeRange(storeId, weekStart, weekEnd);

  return (
    <div style={{ padding: 24 }}>
      <ReportsClient
        mode="dashboard"
        title="Weekly Dashboard"
        stores={stores}
        initialStoreId={storeId}
        initialFromISO={isoDateOnly(weekStart)}
        initialToISO={isoDateOnly(weekEnd)}
        summary={current.summary}
        days={current.days}
      />
    </div>
  );
}
