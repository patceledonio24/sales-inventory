import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decimalToNumber, decimalToString } from "@/lib/serialize";
import AuditClient from "./audit-client";

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default async function AuditPage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string; date?: string }>;
}) {
  const sp = await searchParams;
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || role !== "ADMIN") {
    return <div style={{ padding: 24 }}>Unauthorized (ADMIN only)</div>;
  }

  const stores = await prisma.store.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const storeId = sp?.storeId ?? stores[0]?.id ?? "";
  const dateISO = sp?.date ?? isoDateOnly(new Date());
  const date = new Date(dateISO + "T00:00:00.000Z");

  // Previous day (used for petty cash running balance display)
  const prevDate = new Date(date);
  prevDate.setUTCDate(prevDate.getUTCDate() - 1);

  const rem = storeId
    ? await prisma.dailyRemittance.findUnique({
        where: { storeId_date: { storeId, date } },
        select: { cash: true, gcash: true, discountedQty: true, notes: true },
      })
    : null;

  const expRows = storeId
    ? await prisma.dailyExpense.findMany({
        where: { storeId, date },
        orderBy: { createdAt: "asc" },
        select: { id: true, description: true, amount: true, createdAt: true },
      })
    : [];

  // Total Sales = sum(salesQty * srpSnapshot)
  const salesRows = storeId
    ? await prisma.dailyInventoryEntry.findMany({
        where: { storeId, date },
        select: { salesQty: true, srpSnapshot: true },
      })
    : [];

  const totalSalesGross = salesRows.reduce((sum, r) => {
    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    return sum + (Number.isFinite(qty) ? qty : 0) * srp;
  }, 0);

  const discountQty = rem ? Math.max(0, Number((rem as any).discountedQty ?? 0)) : 0;
  const discountAmount = discountQty * 9;
  const totalSales = totalSalesGross - discountAmount;

  const cash = rem ? decimalToNumber(rem.cash, 0) : 0;
  const gcash = rem ? decimalToNumber(rem.gcash, 0) : 0;
  const remTotal = cash + gcash;

  const expTotal = expRows.reduce((sum, r) => sum + decimalToNumber(r.amount, 0), 0);

  // Previous day petty cash balance = (cash + gcash) - expenses (previous day)
  const prevRem = storeId
    ? await prisma.dailyRemittance.findUnique({
        where: { storeId_date: { storeId, date: prevDate } },
        select: { cash: true, gcash: true },
      })
    : null;

  const prevExpAgg = storeId
    ? await prisma.dailyExpense.aggregate({
        where: { storeId, date: prevDate },
        _sum: { amount: true },
      })
    : { _sum: { amount: null } };

  const prevCash = prevRem ? decimalToNumber(prevRem.cash, 0) : 0;
  const prevGcash = prevRem ? decimalToNumber(prevRem.gcash, 0) : 0;
  const prevExpTotal = decimalToNumber((prevExpAgg as any)?._sum?.amount, 0);
  const prevPettyCashBalance = prevCash + prevGcash - prevExpTotal;

  const timeFmt = new Intl.DateTimeFormat("en-PH", {
    timeStyle: "medium",
    timeZone: "Asia/Manila",
  });

  // Remaining = Sales - (Remittance + Expenses)
  const remaining = totalSales - (remTotal + expTotal);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Audit (Daily)</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        ADMIN-only audit view. Includes Total Sales, Remittance, Expenses breakdown, and Remaining variance.
      </p>

      <div style={{ marginTop: 16 }}>
        <AuditClient
          stores={stores}
          initialStoreId={storeId}
          initialDateISO={dateISO}
          totals={{
            totalSales: totalSales.toFixed(2),
            cash: cash.toFixed(2),
            gcash: gcash.toFixed(2),
            expenses: expTotal.toFixed(2),
            remaining: remaining.toFixed(2),
            remainingAbs: Math.abs(remaining).toFixed(2),
            remainingStatus: remaining < 0 ? "OVER" : remaining > 0 ? "UNDER" : "BALANCED",
            notes: rem?.notes ?? "",
            previousPettyCashBalance: prevPettyCashBalance.toFixed(2),
          }}
          expenses={expRows.map((r) => ({
            id: r.id,
            description: r.description,
            amount: decimalToString(r.amount),
            createdAtISO: r.createdAt.toISOString(),
            createdAtTime: timeFmt.format(r.createdAt), // stable string from server
          }))}
        />
      </div>
    </div>
  );
}
