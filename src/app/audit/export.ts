"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { decimalToNumber } from "@/lib/serialize";

export async function exportAuditCSV(storeId: string, dateISO: string) {
  const session = await getServerSession(authOptions);
  if ((session?.user as any)?.role !== "ADMIN") {
    throw new Error("UNAUTHORIZED");
  }

  const date = new Date(dateISO + "T00:00:00.000Z");

  const store = await prisma.store.findUnique({ where: { id: storeId } });
  if (!store) throw new Error("STORE_NOT_FOUND");

  const rem = await prisma.dailyRemittance.findUnique({
    where: { storeId_date: { storeId, date } },
  });

  const expenses = await prisma.dailyExpense.findMany({
    where: { storeId, date },
    orderBy: { createdAt: "asc" },
  });

  const salesRows = await prisma.dailyInventoryEntry.findMany({
    where: { storeId, date },
    select: { salesQty: true, srpSnapshot: true },
  });

  const totalSales = salesRows.reduce(
    (s, r) =>
      s +
      Number(r.salesQty ?? 0) * decimalToNumber(r.srpSnapshot, 0),
    0
  );

  const cash = rem ? decimalToNumber(rem.cash, 0) : 0;
  const gcash = rem ? decimalToNumber(rem.gcash, 0) : 0;
  const expTotal = expenses.reduce(
    (s, e) => s + decimalToNumber(e.amount, 0),
    0
  );

  const remaining = totalSales - (cash + gcash + expTotal);

  const header = [
    "Date",
    "Store",
    "Total Sales",
    "Cash",
    "GCash",
    "Expenses",
    "Remaining",
    "Expense Description",
    "Expense Amount",
    "Expense Time",
  ];

  const rows =
    expenses.length > 0
      ? expenses.map((e) => [
          dateISO,
          store.name,
          totalSales.toFixed(2),
          cash.toFixed(2),
          gcash.toFixed(2),
          expTotal.toFixed(2),
          remaining.toFixed(2),
          e.description,
          decimalToNumber(e.amount, 0).toFixed(2),
          e.createdAt.toISOString(),
        ])
      : [
          [
            dateISO,
            store.name,
            totalSales.toFixed(2),
            cash.toFixed(2),
            gcash.toFixed(2),
            expTotal.toFixed(2),
            remaining.toFixed(2),
            "",
            "",
            "",
          ],
        ];

  const csv = [header, ...rows]
    .map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(","))
    .join("\n");

  return {
    filename: `audit-${store.name}-${dateISO}.csv`,
    content: csv,
  };
}
