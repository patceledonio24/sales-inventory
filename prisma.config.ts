import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Prefer the pooled Postgres URL for build-time CLI operations
    url: env("POSTGRES_URL"),
  },
});
