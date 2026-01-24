import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ReportsHome() {
  const session = await getServerSession(authOptions);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600 }}>Reports</h1>
      <p style={{ marginTop: 12 }}>ADMIN only.</p>
      <p style={{ marginTop: 12 }}>
        User: <b>{session?.user?.email}</b> | Role:{" "}
        <b>{(session?.user as any)?.role}</b>
      </p>
    </div>
  );
}
