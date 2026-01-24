-- CreateTable
CREATE TABLE "DailyRemittance" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "cash" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "gcash" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyRemittance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyExpense" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyExpense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyRemittance_storeId_date_key" ON "DailyRemittance"("storeId", "date");

-- CreateIndex
CREATE INDEX "DailyRemittance_storeId_date_idx" ON "DailyRemittance"("storeId", "date");

-- CreateIndex
CREATE INDEX "DailyExpense_storeId_date_idx" ON "DailyExpense"("storeId", "date");

-- AddForeignKey
ALTER TABLE "DailyRemittance" ADD CONSTRAINT "DailyRemittance_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyExpense" ADD CONSTRAINT "DailyExpense_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
