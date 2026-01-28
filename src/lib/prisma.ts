// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function safeHost(url?: string) {
  if (!url) return "";
  const at = url.split("@")[1];
  if (!at) return "";
  return at.split("/")[0] || "";
}

function createPrismaClient() {
  const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;

  if (process.env.NODE_ENV !== "production") {
    console.log("DB_ENV:", process.env.DB_ENV);
    console.log("DIRECT_URL host:", safeHost(process.env.DIRECT_URL));
    console.log("DATABASE_URL host:", safeHost(process.env.DATABASE_URL));
    console.log("Using Accelerate:", Boolean(accelerateUrl));
  }

  // Vercel / cloud runtime
  if (accelerateUrl) {
    return new PrismaClient({ accelerateUrl });
  }

  // Local / direct DB runtime
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Missing DIRECT_URL/DATABASE_URL");

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

// Prevent multiple Prisma instances during dev HMR
const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof createPrismaClient>;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
