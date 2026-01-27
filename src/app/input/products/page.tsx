export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProductsClient from "./products-client";

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    // You may redirect instead if you prefer
    throw new Error("Unauthorized");
  }

  const isStaff = session.user.role === "STAFF";

  const stores = await prisma.store.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const defaultStoreId = stores[0]?.id ?? "";

  const products = await prisma.product.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      sku: true,
      isActive: true,
      dailyEntries: defaultStoreId
        ? {
            where: { storeId: defaultStoreId },
            orderBy: { date: "desc" },
            take: 1,
            select: { endQty: true, date: true },
          }
        : undefined,
    },
  });

  const initialProducts = products.map((p) => {
    const latest = (p as any).dailyEntries?.[0] as
      | { endQty: number; date: Date }
      | undefined;

    return {
      id: p.id,
      name: p.name,
      sku: p.sku,
      isActive: p.isActive,
      stock: latest?.endQty ?? 0,
      asOfDateISO: latest?.date
        ? latest.date.toISOString().slice(0, 10)
        : null,
    };
  });

  return (
    <ProductsClient
      stores={stores}
      initialStoreId={defaultStoreId}
      initialProducts={initialProducts}
      isStaff={isStaff}
    />
  );
}
