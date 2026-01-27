import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV ?? "unknown";
  const dbLabel = process.env.NEXT_PUBLIC_DB_LABEL ?? "unknown";
  const vercelEnv = process.env.VERCEL_ENV ?? "local";

  const accel = process.env.PRISMA_ACCELERATE_URL ?? "";
  const fingerprint = accel
    ? crypto.createHash("sha256").update(accel).digest("hex").slice(0, 12)
    : "missing";

  return NextResponse.json({
    appEnv,
    dbLabel,
    vercelEnv,
    accelerateUrlPresent: Boolean(accel),
    accelerateUrlFingerprint: fingerprint,
  });
}
