import "dotenv/config";
import bcrypt from "bcryptjs";
import { prismaDirect } from "./_prismaDirect";

async function main() {
  const prisma = prismaDirect();

  const email = "admin@local.test";
  const password = "Admin123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { role: "ADMIN", passwordHash, name: "Admin" },
    create: { email, name: "Admin", role: "ADMIN", passwordHash },
  });

  console.log("Seeded admin user:", { email, password });
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
