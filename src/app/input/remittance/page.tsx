import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decimalToString } from "@/lib/serialize";
import RemittanceClient from "./remittance-client";

function assertRole(role: unknown): role is "ADMIN" | "STAFF" {
  return role === "ADMIN" || role === "STAFF";
}

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default async function RemittancePage({
  searchParams,
}: {
  searchParams: Promise<{ storeId?: string; date?: string }>;
}) {
  const sp = await searchParams;
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role as "ADMIN" | "STAFF" | undefined;

  if (!session?.user || !assertRole(role)) {
    return <div style={{ padding: 24 }}>Unauthorized</div>;
  }

  const isStaff = role === "STAFF";

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

  const initialDateISO = (sp?.date ?? "").trim() || isoDateOnly(new Date());

  let initial = null as null | {
    storeId: string;
    dateISO: string;
    cash: string;
    gcash: string;
    notes: string;
  };

  if (initialStoreId && initialDateISO) {
    const date = new Date(initialDateISO + "T00:00:00.000Z");
    const row = await prisma.dailyRemittance.findUnique({
      where: { storeId_date: { storeId: initialStoreId, date } },
      select: { cash: true, gcash: true, notes: true },
    });

    if (row) {
      initial = {
        storeId: initialStoreId,
        dateISO: initialDateISO,
        cash: decimalToString(row.cash),
        gcash: decimalToString(row.gcash),
        notes: row.notes ?? "",
      };
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Remittance</h1>
      <p style={{ marginTop: 8 }}>
        Record daily remittance amounts (Cash and GCash). Accessible to ADMIN and STAFF.
      </p>

      <div style={{ marginTop: 16 }}>
        <RemittanceClient
          stores={stores}
          initialStoreId={initialStoreId}
          initialDateISO={initialDateISO}
          initial={initial}
          isStaff={isStaff}
        />
      </div>
    </div>
  );
}
