"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function assertAdmin(role: unknown): role is "ADMIN" {
  return role === "ADMIN";
}

/**
 * Products + latest stock (endQty) for a given store.
 * Stock is computed as: latest DailyInventoryEntry.endQty per product for that store.
 */
export async function getProductsWithStock(args: { storeId: string }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertAdmin(role)) {
    throw new Error("UNAUTHORIZED");
  }

  const storeId = (args.storeId ?? "").trim();
  if (!storeId) {
    return [];
  }

  const products = await prisma.product.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      sku: true,
      isActive: true,
      dailyEntries: {
        where: { storeId },
        orderBy: { date: "desc" },
        take: 1,
        select: { endQty: true, date: true },
      },
    },
  });

  return products.map((p) => {
    const latest = p.dailyEntries[0];
    return {
      id: p.id,
      name: p.name,
      sku: p.sku,
      isActive: p.isActive,
      stock: latest?.endQty ?? 0,
      asOfDateISO: latest?.date ? latest.date.toISOString().slice(0, 10) : null,
    };
  });
}

export async function createProduct(args: { name: string; sku?: string | null }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertAdmin(role)) {
    throw new Error("UNAUTHORIZED");
  }

  const name = (args.name ?? "").trim();
  const sku = (args.sku ?? "").trim();

  if (name.length < 2) {
    throw new Error("INVALID_NAME");
  }

  // sku is optional; if blank, store null
  const skuOrNull = sku.length ? sku : null;

  const created = await prisma.product.create({
    data: {
      name,
      sku: skuOrNull,
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      sku: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Keep your original response shape, but ensure client can use created.product reliably.
  return { ok: true, product: created };
}

export async function setProductActive(args: { productId: string; isActive: boolean }) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role;

  if (!session?.user || !assertAdmin(role)) {
    throw new Error("UNAUTHORIZED");
  }

  await prisma.product.update({
    where: { id: args.productId },
    data: { isActive: args.isActive },
    select: { id: true },
  });

  return { ok: true };
}
