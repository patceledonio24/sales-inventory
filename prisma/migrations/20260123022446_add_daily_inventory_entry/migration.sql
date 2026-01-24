-- CreateTable
CREATE TABLE "DailyInventoryEntry" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "beginQty" INTEGER NOT NULL DEFAULT 0,
    "incomingQty" INTEGER NOT NULL DEFAULT 0,
    "salesQty" INTEGER NOT NULL DEFAULT 0,
    "endQty" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyInventoryEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DailyInventoryEntry_storeId_date_idx" ON "DailyInventoryEntry"("storeId", "date");

-- CreateIndex
CREATE INDEX "DailyInventoryEntry_productId_date_idx" ON "DailyInventoryEntry"("productId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "DailyInventoryEntry_storeId_date_productId_key" ON "DailyInventoryEntry"("storeId", "date", "productId");

-- AddForeignKey
ALTER TABLE "DailyInventoryEntry" ADD CONSTRAINT "DailyInventoryEntry_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyInventoryEntry" ADD CONSTRAINT "DailyInventoryEntry_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
