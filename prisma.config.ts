import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // For CLI/migrations: use direct DB URL (NOT accelerate)
    url:
      env("PROD_POSTGRES_POSTGRES_URL") ?? // prod DB (when attached with prefix)
      env("POSTGRES_URL") ??               // legacy/without prefix
      env("DATABASE_URL"),                 // local dev fallback (if you ever use it)
  },
});
