import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // CLI should always use direct DB connection
    url: process.env.DIRECT_URL || process.env.DATABASE_URL,
  },
});
