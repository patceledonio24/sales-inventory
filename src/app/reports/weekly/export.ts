"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { decimalToNumber } from "@/lib/serialize";

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

export async function exportWeeklyCSV() {
  const session = await getServerSession(authOptions);
  if ((session?.user as any)?.role !== "ADMIN") {
    throw new Error("UNAUTHORIZED");
  }

  // ===== Server-owned week range (last 7 days, UTC) =====
  const today = new Date();
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - 6);

  const startISO = isoDateOnly(start);
  const endISO = isoDateOnly(end);
  const DAYS = 7;

  // ===== Fetch inventory entries (NO product relation) =====
  const entries = await prisma.dailyInventoryEntry.findMany({
    where: {
      date: {
        gte: start,
        lte: new Date(end.getTime() + 24 * 60 * 60 * 1000 - 1),
      },
    },
    select: {
      productId: true,
      salesQty: true,
      lpSnapshot: true,
      srpSnapshot: true,
    },
  });

  // ===== Fetch total discount qty from remittances for the same range =====
  const remits = await prisma.dailyRemittance.findMany({
    where: {
      date: {
        gte: start,
        lte: new Date(end.getTime() + 24 * 60 * 60 * 1000 - 1),
      },
    },
    select: {
      discountedQty: true,
    },
  });

  const discountTotal = remits.reduce((s, r) => s + Math.max(0, Number((r as any).discountedQty ?? 0)) * 9, 0);

  // ===== Fetch products separately =====
  const products = await prisma.product.findMany({
    select: { id: true, name: true },
  });

  const productNameById = new Map(products.map((p) => [p.id, p.name]));

  // ===== Aggregate by PRODUCT (gross, before day-level discount) =====
  const map = new Map<string, { product: string; lp: number; srp: number; rev: number; qty: number }>();

  for (const r of entries) {
    const productName = productNameById.get(r.productId);
    if (!productName) continue;

    const qty = Number(r.salesQty ?? 0);
    const srp = decimalToNumber(r.srpSnapshot, 0);
    const lp = decimalToNumber(r.lpSnapshot, 0);
    const rev = qty * srp;

    const cur = map.get(r.productId) ?? { product: productName, lp, srp, rev: 0, qty: 0 };
    cur.rev += rev;
    cur.qty += qty;
    map.set(r.productId, cur);
  }

  // ===== Build CSV =====
  const header = [
    "Product",
    "LP",
    "SRP",
    "Total Week Revenue",
    "Ave/Day (Rev)",
    "Qty Sold (pcs)",
    "Ave/Day (pcs)",
  ];

  const body = Array.from(map.values()).map((v) => [
    v.product,
    v.lp ? v.lp.toFixed(2) : "",
    v.srp ? v.srp.toFixed(2) : "",
    v.rev.toFixed(2),
    (v.rev / DAYS).toFixed(2),
    v.qty.toFixed(2),
    (v.qty / DAYS).toFixed(2),
  ]);

  const grossTotalRev = body.reduce((s, r) => s + Number(r[3]), 0);
  const totalQty = body.reduce((s, r) => s + Number(r[5]), 0);

  body.push([
    "TOTAL (GROSS)",
    "",
    "",
    grossTotalRev.toFixed(2),
    "",
    totalQty.toFixed(2),
    (totalQty / DAYS).toFixed(2),
  ]);

  body.push([
    "DISCOUNT (PWD/Senior)",
    "",
    "",
    (-discountTotal).toFixed(2),
    "",
    "",
    "",
  ]);

  body.push([
    "TOTAL (NET)",
    "",
    "",
    (grossTotalRev - discountTotal).toFixed(2),
    "",
    "",
    "",
  ]);

  const csv = [header, ...body]
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  return {
    filename: `weekly-product-report-${startISO}-to-${endISO}.csv`,
    content: csv,
  };
}
