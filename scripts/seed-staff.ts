import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  const email = "staff@local.test";
  const password = "Staff123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { role: "STAFF", passwordHash, name: "Staff" },
    create: {
      email,
      name: "Staff",
      role: "STAFF",
      passwordHash,
    },
  });

  console.log("Seeded staff user:", { email, password });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
