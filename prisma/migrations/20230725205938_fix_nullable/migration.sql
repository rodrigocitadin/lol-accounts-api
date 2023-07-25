/*
  Warnings:

  - Made the column `sold` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `level` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `elo` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "sold" SET NOT NULL,
ALTER COLUMN "level" SET NOT NULL,
ALTER COLUMN "elo" SET NOT NULL;
