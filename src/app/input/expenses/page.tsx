import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { decimalToString } from "@/lib/serialize";
import ExpensesClient from "./expenses-client";

function assertRole(role: unknown): role is "ADMIN" | "STAFF" {
  return role === "ADMIN" || role === "STAFF";
}

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

function safeISODate(s?: string) {
  const v = (s ?? "").trim();
  if (!v) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
  return v;
}

export default async function ExpensesPage({
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

  // ALWAYS safe
  const safeStores = Array.isArray(stores) ? stores : [];

  const requestedStoreId = (sp?.storeId ?? "").trim();
  const initialStoreId =
    (requestedStoreId && safeStores.some((s) => s.id === requestedStoreId) ? requestedStoreId : "") ||
    safeStores[0]?.id ||
    "";

  const initialDateISO = safeISODate(sp?.date) ?? isoDateOnly(new Date());
  const date = new Date(initialDateISO + "T00:00:00.000Z");

  const rows =
    initialStoreId && !Number.isNaN(date.getTime())
      ? await prisma.dailyExpense.findMany({
          where: { storeId: initialStoreId, date },
          orderBy: { createdAt: "asc" },
          select: { id: true, description: true, amount: true },
        })
      : [];

  const safeRows = (rows ?? []).map((r) => ({
    id: r.id,
    description: r.description,
    amount: decimalToString(r.amount),
  }));

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Petty Cash / Expenses</h1>
      <p style={{ marginTop: 8 }}>
        Record daily expenses and petty cash items. Accessible to ADMIN and STAFF.
      </p>

      <div style={{ marginTop: 16 }}>
        <ExpensesClient
          stores={safeStores}
          initialStoreId={initialStoreId}
          initialDateISO={initialDateISO}
          initialRows={safeRows}
          isStaff={isStaff}
        />
      </div>
    </div>
  );
}
