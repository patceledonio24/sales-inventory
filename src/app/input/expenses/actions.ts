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

export async function addExpense(args: {
  storeId: string;
  dateISO: string;
  description: string;
  amount: string;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");
  if (!args.storeId || !args.dateISO) throw new Error("INVALID_INPUT");

  const desc = args.description?.trim();
  if (!desc) throw new Error("DESCRIPTION_REQUIRED");

  const date = new Date(args.dateISO + "T00:00:00.000Z");
  if (Number.isNaN(date.getTime())) throw new Error("INVALID_DATE");

  const created = await prisma.dailyExpense.create({
    data: {
      storeId: args.storeId,
      date,
      description: desc,
      amount: toMoneyString(args.amount),
    },
    select: { id: true, description: true, amount: true },
  });

  return {
    ok: true,
    row: {
      id: created.id,
      description: created.description,
      amount: String(created.amount), // Decimal -> string is safe enough here
    },
  };
}

export async function deleteExpense(args: { id: string }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");
  if (!args.id) throw new Error("INVALID_INPUT");

  await prisma.dailyExpense.delete({ where: { id: args.id } });
  return { ok: true };
}
