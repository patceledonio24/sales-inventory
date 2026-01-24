import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decimalToNumber } from "@/lib/serialize";
import ReportsClient from "./weekly-client";

type StoreDTO = { id: string; name: string };

type DayRow = {
  date: string;
  sales: string;
  cash: string;
  gcash: string;
  expenses: string;
  net: string;
};

type Summary = {
  totalSales: string;
  totalCash: string;
  totalGCash: string;
  totalExpenses: string;
  net: string;
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
function fmt2(n: number) {
  return n.toFixed(2);
}

async function computeRange(storeId: string, from: Date, to: Date): Promise<{ summary: Summary; days: DayRow[] }> {
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

  const daysCount = diffDaysInclusiveUTC(from, to);
  const days: DayRow[] = Array.from({ length: daysCount }).map((_, i) => {
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

export default async function WeeklyReportsPage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string; from?: string; to?: string; compare?: string }>;
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

  const storeId =
    (sp.storeId && stores.some((s) => s.id === sp.storeId) && sp.storeId) || stores[0].id;

  const today = startOfDayUTC(new Date());
  const defaultTo = today;
  const defaultFrom = addDaysUTC(today, -6);

  const from = startOfDayUTC(parseISODate(sp.from, defaultFrom));
  const to = startOfDayUTC(parseISODate(sp.to, defaultTo));

  const safeFrom = from.getTime() <= to.getTime() ? from : to;
  const safeTo = from.getTime() <= to.getTime() ? to : from;

  const current = await computeRange(storeId, safeFrom, safeTo);

  return (
    <div style={{ padding: 24 }}>
      <ReportsClient
        stores={stores}
        initialStoreId={storeId}
        initialFromISO={isoDateOnly(safeFrom)}
        initialToISO={isoDateOnly(safeTo)}
        summary={current.summary}
        days={current.days}
      />
    </div>
  );
}
