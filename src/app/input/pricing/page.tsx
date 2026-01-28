import { prisma } from "@/lib/prisma";
import PricingClient from "./pricing-client";
import { decimalToString } from "@/lib/serialize";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string }>;
}) {
  const sp = await searchParams;

  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role as "ADMIN" | "STAFF" | undefined;
  const isStaff = role === "STAFF";

  // Pricing is ADMIN-only
  if (!session?.user || role !== "ADMIN") {
    return <div style={{ padding: 24 }}>Unauthorized</div>;
  }

  const stores = await prisma.store.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const requestedStoreId = (sp?.storeId ?? "").trim();
  const initialStoreId =
    (requestedStoreId && stores.some((s) => s.id === requestedStoreId) ? requestedStoreId : "") ||
    stores[0]?.id ||
    "";

  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const prices = await prisma.productPrice.findMany({
    select: { storeId: true, productId: true, lp: true, srp: true },
  });

  const safePrices = prices.map((p) => ({
    storeId: p.storeId,
    productId: p.productId,
    lp: decimalToString(p.lp),
    srp: decimalToString(p.srp),
  }));

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Pricing (LP / SRP)</h1>
      <p style={{ marginTop: 8 }}>
        Manual input page for LP (cost) and SRP (selling price). ADMIN-only.
      </p>

      <div style={{ marginTop: 16 }}>
        <PricingClient
          stores={stores}
          products={products}
          prices={safePrices}
          initialStoreId={initialStoreId}
          isStaff={isStaff}
        />
      </div>
    </div>
  );
}
