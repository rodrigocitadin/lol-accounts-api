/*
  Warnings:

  - Changed the type of `ammount` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "ammount",
ADD COLUMN     "ammount" DECIMAL(65,30) NOT NULL;
