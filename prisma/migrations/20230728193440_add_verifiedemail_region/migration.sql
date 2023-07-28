-- CreateEnum
CREATE TYPE "Region" AS ENUM ('BR', 'EUNE', 'EUW', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR', 'JP', 'KR', 'PH', 'SG', 'TW', 'TH', 'VN', 'PBE');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "region" "Region" NOT NULL DEFAULT 'BR',
ADD COLUMN     "verifiedEmail" BOOLEAN NOT NULL DEFAULT false;
