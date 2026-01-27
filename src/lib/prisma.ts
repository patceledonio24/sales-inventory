import { PrismaClient } from "@/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

function createPrismaClient() {
  const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;

  if (!accelerateUrl) {
    throw new Error("Missing PRISMA_ACCELERATE_URL");
  }

  if (
    process.env.NODE_ENV === "development" &&
    (process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_APP_ENV === "prod")
  ) {
    throw new Error("Refusing to run PROD configuration in development.");
  }

  if (process.env.DB_ENV !== process.env.NEXT_PUBLIC_APP_ENV) {
    throw new Error("DB_ENV and NEXT_PUBLIC_APP_ENV mismatch");
  }

  return new PrismaClient({
    accelerateUrl,
    log: process.env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["error"],
  }).$extends(withAccelerate());
}

type PrismaClientWithAccelerate = ReturnType<typeof createPrismaClient>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientWithAccelerate | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
