"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { decimalToNumber } from "@/lib/serialize";

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

function startOfDayUTCFromISO(iso: string) {
  // Expect YYYY-MM-DD
  const d = new Date(`${iso}T00:00:00.000Z`);
  if (Number.isNaN(d.getTime())) throw new Error("INVALID_DATE");
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function endOfDayUTC(d: Date) {
  // 23:59:59.999Z for the same UTC day
  return new Date(d.getTime() + 24 * 60 * 60 * 1000 - 1);
}

function fmt2(n: number) {
  return n.toFixed(2);
}

/**
 * Export the Weekly Dashboard CSV for the selected store/date range.
 * Mirrors the numbers shown in /reports/weekly.
 */
export async function exportWeeklyCSV(storeId: string, fromISO: string, toISO: string) {
  const session = await getServerSession(authOptions);
  if ((session?.user as any)?.role !== "ADMIN") {
    throw new Error("UNAUTHORIZED");
  }

  if (!storeId) throw new Error("MISSING_STORE");
  if (!fromISO || !toISO) throw new Error("MISSING_RANGE");

  const from = startOfDayUTCFromISO(fromISO);
  const to = startOfDayUTCFromISO(toISO);
  const safeFrom = from.getTime() <= to.getTime() ? from : to;
  const safeTo = from.getTime() <= to.getTime() ? to : from;

  // Validate store exists (and active) to avoid exporting garbage
  const store = await prisma.store.findFirst({
    where: { id: storeId, isActive: true },
    select: { id: true, name: true },
  });
  if (!store) throw new Error("INVALID_STORE");

  const entries = await prisma.dailyInventoryEntry.findMany({
    where: { storeId, date: { gte: safeFrom, lte: endOfDayUTC(safeTo) } },
    select: { date: true, salesQty: true, srpSnapshot: true },
  });

  const remits = await prisma.dailyRemittance.findMany({
    where: { storeId, date: { gte: safeFrom, lte: endOfDayUTC(safeTo) } },
    select: { date: true, cash: true, gcash: true, discountedQty: true },
  });

  const expenses = await prisma.dailyExpense.findMany({
    where: { storeId, date: { gte: safeFrom, lte: endOfDayUTC(safeTo) } },
    select: { date: true, amount: true },
  });

  // Aggregate per UTC date (same as weekly/page.tsx)
  const byDay = new Map<
    string,
    { salesGross: number; discountQty: number; cash: number; gcash: number; expenses: number }
  >();

  const ensure = (k: string) => {
    if (!byDay.has(k)) byDay.set(k, { salesGross: 0, discountQty: 0, cash: 0, gcash: 0, expenses: 0 });
    return byDay.get(k)!;
  };

  for (const r of entries) {
    const k = isoDateOnly(r.date);
    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    ensure(k).salesGross += (Number.isFinite(qty) ? qty : 0) * srp;
  }

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

  // Build a continuous range (even if some days have 0s)
  const dayMs = 24 * 60 * 60 * 1000;
  const days: { date: string; sales: string; cash: string; gcash: string; expenses: string; net: string }[] = [];

  for (let t = safeFrom.getTime(); t <= safeTo.getTime(); t += dayMs) {
    const d = new Date(t);
    const k = isoDateOnly(d);
    const v = ensure(k);

    const discountAmount = v.discountQty * 9;
    const salesNet = v.salesGross - discountAmount;
    const net = salesNet - v.expenses;

    days.push({
      date: k,
      sales: fmt2(salesNet),
      cash: fmt2(v.cash),
      gcash: fmt2(v.gcash),
      expenses: fmt2(v.expenses),
      net: fmt2(net),
    });
  }

  const totalSales = days.reduce((s, r) => s + Number(r.sales), 0);
  const totalCash = days.reduce((s, r) => s + Number(r.cash), 0);
  const totalGCash = days.reduce((s, r) => s + Number(r.gcash), 0);
  const totalExpenses = days.reduce((s, r) => s + Number(r.expenses), 0);
  const totalNet = totalSales - totalExpenses;

  const header = ["Date", "Sales (NET)", "Cash", "GCash", "Expenses", "Net"];
  const body = days.map((r) => [r.date, r.sales, r.cash, r.gcash, r.expenses, r.net]);
  body.push(["TOTAL", fmt2(totalSales), fmt2(totalCash), fmt2(totalGCash), fmt2(totalExpenses), fmt2(totalNet)]);

  const csv = [header, ...body]
    .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  return {
    filename: `sales-report-${store.name}-${isoDateOnly(safeFrom)}-to-${isoDateOnly(safeTo)}.csv`,
    content: csv,
  };
}
