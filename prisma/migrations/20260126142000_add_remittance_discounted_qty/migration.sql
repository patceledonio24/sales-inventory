-- Add total discounted quantity (PWD/Senior) captured at remittance level
ALTER TABLE "DailyRemittance" ADD COLUMN "discountedQty" INTEGER NOT NULL DEFAULT 0;
