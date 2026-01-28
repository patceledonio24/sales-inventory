"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { todayISO } from "@/lib/today";
import { Prisma } from "@prisma/client";

function assertRole(role: unknown): role is "ADMIN" | "STAFF" {
  return role === "ADMIN" || role === "STAFF";
}

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
  const role = (session?.user as any)?.role;
  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");

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
  const role = (session?.user as any)?.role;
  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");

  const storeId = args.storeId.trim();
  const dateISO = safeISODate(args.dateISO);
  const description = args.description.trim().replace(/\s+/g, " ");
  const amount = args.amount.toString();

  if (!storeId || !dateISO) throw new Error("INVALID_INPUT");
  if (!description) throw new Error("DESCRIPTION_REQUIRED");

  // STAFF can only add expenses for "today" (Asia/Manila)
  if (role === "STAFF" && dateISO !== todayISO("Asia/Manila")) {
    throw new Error("STAFF_TODAY_ONLY");
  }

  const date = new Date(`${dateISO}T00:00:00.000Z`);

  // Avoid duplicates: if same description already exists for this store+date (case-insensitive),
  // increment the existing amount instead of creating a new row. If multiple duplicates exist
  // (from older behavior), consolidate them into one.
  const row = await prisma.$transaction(async (tx) => {
    const matches = await tx.dailyExpense.findMany({
      where: {
        storeId,
        date,
        description: { equals: description, mode: "insensitive" },
      },
      orderBy: { createdAt: "asc" },
      select: { id: true, description: true, amount: true },
    });

    if (matches.length === 0) {
      const created = await tx.dailyExpense.create({
        data: {
          storeId,
          date,
          description,
          amount, // Prisma Decimal accepts string
        },
        select: { id: true, description: true, amount: true },
      });
      return toPlainExpense(created);
    }

    const keep = matches[0];
    const dupes = matches.slice(1);

    // Sum existing duplicates + new amount
    const existingTotal = matches.reduce(
      (acc, r) => acc.plus(r.amount),
      new Prisma.Decimal(0)
    );
    const nextTotal = existingTotal.plus(new Prisma.Decimal(amount));

    const updated = await tx.dailyExpense.update({
      where: { id: keep.id },
      data: { amount: nextTotal },
      select: { id: true, description: true, amount: true },
    });

    if (dupes.length > 0) {
      await tx.dailyExpense.deleteMany({
        where: { id: { in: dupes.map((d) => d.id) } },
      });
    }

    return toPlainExpense(updated);
  });

  return { ok: true, row };
}

export async function deleteExpense(args: { id: string }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;
  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");

  // STAFF can only delete expenses for "today" (Asia/Manila)
  if (role === "STAFF") {
    const row = await prisma.dailyExpense.findUnique({
      where: { id: args.id },
      select: { date: true },
    });
    if (!row) throw new Error("NOT_FOUND");
    const rowISO = row.date.toISOString().slice(0, 10);
    if (rowISO !== todayISO("Asia/Manila")) throw new Error("STAFF_TODAY_ONLY");
  }

  await prisma.dailyExpense.delete({ where: { id: args.id } });
  return { ok: true };
}
