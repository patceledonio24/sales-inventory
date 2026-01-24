import dotenv from "dotenv";

// Load .env explicitly for Prisma 7 config evaluation
dotenv.config({ path: ".env" });

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
