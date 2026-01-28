import "dotenv/config";
import { prismaDirect } from "./_prismaDirect";

async function main() {
  const prisma = prismaDirect();

  const store = await prisma.store.upsert({
    where: { code: "mr-liempo" },
    update: { name: "Mr. Liempo", isActive: true },
    create: { code: "mr-liempo", name: "Mr. Liempo" },
  });

  const productNames = ["Chicken", "Liempo", "Chorizo"];

  const products = [];
  for (const name of productNames) {
    const p = await prisma.product.upsert({
      where: { sku: name.toLowerCase() },
      update: { name, isActive: true },
      create: { sku: name.toLowerCase(), name },
    });
    products.push(p);
  }

  for (const p of products) {
    await prisma.productPrice.upsert({
      where: { storeId_productId: { storeId: store.id, productId: p.id } },
      update: {},
      create: {
        storeId: store.id,
        productId: p.id,
        lp: "0.00",
        srp: "0.00",
      },
    });
  }

  console.log("Seeded store/products/prices:", {
    store: store.name,
    products: products.map((p) => p.name),
  });

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
