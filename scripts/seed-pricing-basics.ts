import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  // Store (matches your first tab name)
  const store = await prisma.store.upsert({
    where: { code: "mr-liempo" },
    update: { name: "Mr. Liempo", isActive: true },
    create: { code: "mr-liempo", name: "Mr. Liempo" },
  });

  // Minimal starter products (we can import the full list from your Excel later)
  const productNames = ["Chicken", "Liempo", "Chorizo"];

  const products = [];
  for (const name of productNames) {
    const p = await prisma.product.upsert({
      where: { sku: name.toLowerCase() }, // using sku as simple unique for seed
      update: { name, isActive: true },
      create: { sku: name.toLowerCase(), name },
    });
    products.push(p);
  }

  // Ensure there is a ProductPrice row for each product in this store
  for (const p of products) {
    await prisma.productPrice.upsert({
      where: {
        storeId_productId: { storeId: store.id, productId: p.id },
      },
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
