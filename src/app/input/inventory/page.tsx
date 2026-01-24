import { prisma } from "@/lib/prisma";
import InventoryClient from "./inventory-client";
import { decimalToString } from "@/lib/serialize";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

function safeISODate(s?: string) {
  const v = (s ?? "").trim();
  if (!v) return null;
  // Basic guard: "YYYY-MM-DD"
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
  return v;
}

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string; date?: string }>;
}) {
  const sp = await searchParams;

  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role as "ADMIN" | "STAFF" | undefined;
  const isStaff = role === "STAFF";

  const stores = await prisma.store.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const requestedStoreId = (sp?.storeId ?? "").trim();
  const defaultStoreId =
    (requestedStoreId && stores.some((s) => s.id === requestedStoreId) ? requestedStoreId : "") ||
    stores[0]?.id ||
    "";

  const requestedDateISO = safeISODate(sp?.date) ?? isoDateOnly(new Date());
  const defaultDateISO = requestedDateISO;

  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  // Current prices for the selected store (used if no snapshot exists yet)
  const prices = defaultStoreId
    ? await prisma.productPrice.findMany({
        where: { storeId: defaultStoreId },
        select: { productId: true, lp: true, srp: true },
      })
    : [];

  const date = new Date(defaultDateISO + "T00:00:00.000Z");

  // Existing entries for that store+date
  const entries =
    defaultStoreId && !Number.isNaN(date.getTime())
      ? await prisma.dailyInventoryEntry.findMany({
          where: { storeId: defaultStoreId, date },
          select: {
            productId: true,
            beginQty: true,
            incomingQty: true,
            salesQty: true,
            endQty: true,
          },
        })
      : [];

  // IMPORTANT: Convert Decimal -> string before passing into a Client Component
  const safePrices = prices.map((p) => ({
    productId: p.productId,
    lp: decimalToString(p.lp),
    srp: decimalToString(p.srp),
  }));

  // Match InventoryClient's expected Entry shape (no snapshot fields)
  const safeEntries = entries.map((e) => ({
    productId: e.productId,
    beginQty: e.beginQty,
    incomingQty: e.incomingQty,
    salesQty: e.salesQty,
    endQty: e.endQty,
  }));

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Daily Inventory Input</h1>
      <p style={{ marginTop: 8 }}>
        Manual: Beginning, Incoming, Sales. Computed: Ending + Value. Saved entries are loaded per store/date.
      </p>

      <div style={{ marginTop: 16 }}>
        <InventoryClient
          stores={stores}
          products={products}
          prices={safePrices}
          initialEntries={safeEntries}
          initialStoreId={defaultStoreId}
          initialDateISO={defaultDateISO}
          isStaff={isStaff}
        />
      </div>
    </div>
  );
}
