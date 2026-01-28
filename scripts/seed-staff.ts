import "dotenv/config";
import bcrypt from "bcryptjs";
import { prismaDirect } from "./_prismaDirect";

async function main() {
  const prisma = prismaDirect();

  const email = "staff@local.test";
  const password = "Staff123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { role: "STAFF", passwordHash, name: "Staff" },
    create: { email, name: "Staff", role: "STAFF", passwordHash },
  });

  console.log("Seeded staff user:", { email, password });
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
