"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function assertRole(role: unknown): role is "ADMIN" | "STAFF" {
  return role === "ADMIN" || role === "STAFF";
}

function toInt(v: unknown) {
  const n = typeof v === "string" ? Number(v) : typeof v === "number" ? v : 0;
  if (!Number.isFinite(n)) return 0;
  return Math.trunc(n);
}

/**
 * Save daily inventory entries for a store/date.
 *
 * Supports BOTH payload shapes so we don't break the client:
 * - args.rows:    { beginQty/incomingQty/salesQty as string }  (your current)
 * - args.entries: { beginQty/incomingQty/salesQty as number }  (if client sends numbers)
 */
export async function saveDailyEntries(args: {
  storeId: string;
  dateISO: string; // "YYYY-MM-DD"
  rows?: Array<{
    productId: string;
    beginQty: string;
    incomingQty: string;
    salesQty: string;
  }>;
  entries?: Array<{
    productId: string;
    beginQty: number;
    incomingQty: number;
    salesQty: number;
    endQty?: number; // optional; server will compute authoritative endQty
  }>;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertRole(role)) throw new Error("UNAUTHORIZED");
  if (!args.storeId || !args.dateISO) throw new Error("INVALID_INPUT");

  const date = new Date(args.dateISO + "T00:00:00.000Z");
  if (Number.isNaN(date.getTime())) throw new Error("INVALID_DATE");

  const rows =
    args.rows ??
    (args.entries ?? []).map((e) => ({
      productId: e.productId,
      beginQty: String(e.beginQty ?? 0),
      incomingQty: String(e.incomingQty ?? 0),
      salesQty: String(e.salesQty ?? 0),
    }));

  // Load current prices once, then snapshot into each saved entry
  const priceRows = await prisma.productPrice.findMany({
    where: { storeId: args.storeId },
    select: { productId: true, lp: true, srp: true },
  });

  const priceMap = new Map<string, { lp: string; srp: string }>();
  for (const p of priceRows) {
    priceMap.set(p.productId, {
      lp: Number(p.lp).toFixed(2),
      srp: Number(p.srp).toFixed(2),
    });
  }

  await prisma.$transaction(async (tx) => {
    for (const r of rows) {
      if (!r?.productId) continue;

      const beginQty = Math.max(0, toInt(r.beginQty));
      const incomingQty = Math.max(0, toInt(r.incomingQty));
      const salesQty = Math.max(0, toInt(r.salesQty));

      // authoritative computation
      const endQty = beginQty + incomingQty - salesQty;

      const price = priceMap.get(r.productId) ?? { lp: "0.00", srp: "0.00" };

      await tx.dailyInventoryEntry.upsert({
        where: {
          storeId_date_productId: {
            storeId: args.storeId,
            date,
            productId: r.productId,
          },
        },
        update: {
          beginQty,
          incomingQty,
          salesQty,
          endQty,
          lpSnapshot: price.lp,
          srpSnapshot: price.srp,
        },
        create: {
          storeId: args.storeId,
          productId: r.productId,
          date,
          beginQty,
          incomingQty,
          salesQty,
          endQty,
          lpSnapshot: price.lp,
          srpSnapshot: price.srp,
        },
      });
    }
  });

  // CRITICAL: return a success signal so the client can show a snackbar
  return { ok: true };
}
