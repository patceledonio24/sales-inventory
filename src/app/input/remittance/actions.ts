"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function assertRole(role: unknown): role is "ADMIN" | "STAFF" {
  return role === "ADMIN" || role === "STAFF";
}

function toMoneyString(v: unknown) {
  const n = typeof v === "string" ? Number(v) : typeof v === "number" ? v : 0;
  if (!Number.isFinite(n)) return "0.00";
  return n.toFixed(2);
}

function toInt(v: unknown) {
  const n = typeof v === "string" ? Number(v) : typeof v === "number" ? v : 0;
  const x = Number.isFinite(n) ? Math.floor(n) : 0;
  return Math.max(0, x);
}

export async function saveDailyRemittance(args: {
  storeId: string;
  dateISO: string; // YYYY-MM-DD
  cash: string;
  gcash: string;
  discountedQty?: string;
  notes?: string;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");
  if (!args.storeId || !args.dateISO) throw new Error("INVALID_INPUT");

  const date = new Date(args.dateISO + "T00:00:00.000Z");
  if (Number.isNaN(date.getTime())) throw new Error("INVALID_DATE");

  await prisma.dailyRemittance.upsert({
    where: {
      storeId_date: {
        storeId: args.storeId,
        date,
      },
    },
    update: {
      cash: toMoneyString(args.cash),
      gcash: toMoneyString(args.gcash),
      discountedQty: toInt(args.discountedQty),
      notes: args.notes?.trim() ? args.notes.trim() : null,
    },
    create: {
      storeId: args.storeId,
      date,
      cash: toMoneyString(args.cash),
      gcash: toMoneyString(args.gcash),
      discountedQty: toInt(args.discountedQty),
      notes: args.notes?.trim() ? args.notes.trim() : null,
    },
  });

  return { ok: true };
}
