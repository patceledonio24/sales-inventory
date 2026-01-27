"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

function safeISODate(s: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  return s;
}

function toPlainExpense(row: any) {
  return {
    id: String(row.id),
    description: String(row.description),
    amount: row.amount.toString(), // ✅ Decimal → string
  };
}

export async function searchExpenseSuggestions(args: {
  storeId: string;
  q: string;
  limit?: number;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("UNAUTHORIZED");

  const storeId = args.storeId.trim();
  const q = args.q.trim();
  const limit = Math.min(args.limit ?? 8, 20);

  if (!storeId || !q) return { ok: true, items: [] };

  const rows = await prisma.dailyExpense.findMany({
    where: {
      storeId,
      description: { contains: q, mode: "insensitive" },
    },
    distinct: ["description"],
    take: limit,
    select: { description: true },
  });

  return { ok: true, items: rows.map((r) => r.description) };
}

export async function addExpense(args: {
  storeId: string;
  dateISO: string;
  description: string;
  amount: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("UNAUTHORIZED");

  const storeId = args.storeId.trim();
  const dateISO = safeISODate(args.dateISO);
  const description = args.description.trim();
  const amount = args.amount.toString();

  if (!storeId || !dateISO) throw new Error("INVALID_INPUT");
  if (!description) throw new Error("DESCRIPTION_REQUIRED");

  const date = new Date(`${dateISO}T00:00:00.000Z`);

  const created = await prisma.dailyExpense.create({
    data: {
      storeId,
      date,
      description,
      amount, // Prisma Decimal accepts string
    },
    select: {
      id: true,
      description: true,
      amount: true,
    },
  });

  // 🚨 THIS IS THE CRITICAL LINE
  const row = toPlainExpense(created);

  return { ok: true, row };
}

export async function deleteExpense(args: { id: string }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("UNAUTHORIZED");

  await prisma.dailyExpense.delete({ where: { id: args.id } });
  return { ok: true };
}
