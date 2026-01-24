-- AlterTable
ALTER TABLE "DailyInventoryEntry" ADD COLUMN     "lpSnapshot" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "srpSnapshot" DECIMAL(12,2) NOT NULL DEFAULT 0.00;
