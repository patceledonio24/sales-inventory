import { PrismaClient } from "@/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

function createPrismaClient() {
  const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;

  if (!accelerateUrl) {
    throw new Error("Missing PRISMA_ACCELERATE_URL");
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
