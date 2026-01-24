import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function InputHome() {
  const session = await getServerSession(authOptions);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Manual Input</h1>
      <p style={{ marginTop: 12 }}>Accessible to ADMIN and STAFF.</p>
      <p style={{ marginTop: 12 }}>
        User: <b>{session?.user?.email}</b> | Role: <b>{(session?.user as any)?.role}</b>
      </p>

      <div style={{ marginTop: 18, display: "grid", gap: 10, maxWidth: 520 }}>
        <Link href="/input/inventory">→ Daily Inventory Input</Link>
        <Link href="/input/pricing">→ Pricing (LP/SRP)</Link>
        <Link href="/input/remittance">→ Remittance (Cash / GCash)</Link>
        <Link href="/input/expenses">→ Petty Cash / Expenses</Link>
      </div>

      {(session?.user as any)?.role === "ADMIN" && (
        <div style={{ marginTop: 18 }}>
          <Link href="/audit">→ Audit (Daily)</Link>
        </div>
      )}
    </div>
  );
}
