/*
  Warnings:

  - You are about to drop the column `supliments` on the `CodeSystem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CodeSystem" DROP COLUMN "supliments",
ADD COLUMN     "supplements" TEXT;
