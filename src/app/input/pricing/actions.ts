"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function assertAdmin(role: unknown): role is "ADMIN" {
  return role === "ADMIN";
}

function toPrice(v: string) {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) throw new Error("INVALID_PRICE");
  return n.toFixed(2);
}

export async function saveProductPrice(args: {
  storeId: string;
  productId: string;
  lp: string;
  srp: string;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertAdmin(role)) {
    throw new Error("UNAUTHORIZED");
  }

  const lp = toPrice(args.lp);
  const srp = toPrice(args.srp);

  await prisma.productPrice.upsert({
    where: {
      storeId_productId: {
        storeId: args.storeId,
        productId: args.productId,
      },
    },
    update: { lp, srp },
    create: { storeId: args.storeId, productId: args.productId, lp, srp },
  });

  return { ok: true };
}

/**
 * Save ALL product prices for a store in one click.
 */
export async function saveProductPrices(args: {
  storeId: string;
  rows: Array<{ productId: string; lp: string; srp: string }>;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertAdmin(role)) {
    throw new Error("UNAUTHORIZED");
  }

  if (!args.storeId) throw new Error("INVALID_INPUT");

  const rows = Array.isArray(args.rows) ? args.rows : [];
  if (rows.length === 0) return { ok: true, saved: 0 };

  await prisma.$transaction(async (tx) => {
    for (const r of rows) {
      if (!r?.productId) continue;

      const lp = toPrice(r.lp);
      const srp = toPrice(r.srp);

      await tx.productPrice.upsert({
        where: {
          storeId_productId: {
            storeId: args.storeId,
            productId: r.productId,
          },
        },
        update: { lp, srp },
        create: { storeId: args.storeId, productId: r.productId, lp, srp },
      });
    }
  });

  return { ok: true, saved: rows.length };
}
