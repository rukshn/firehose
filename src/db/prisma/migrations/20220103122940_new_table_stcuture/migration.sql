/*
  Warnings:

  - The primary key for the `CodeSystem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `CodeSystem` table. All the data in the column will be lost.
  - The primary key for the `Concept` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Concept` table. All the data in the column will be lost.
  - The primary key for the `ValueSet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `ValueSet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `CodeSystem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ValueSet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CodeSystem" DROP CONSTRAINT "CodeSystem_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "_ValueSetToValueSetInclude" DROP CONSTRAINT "_ValueSetToValueSetInclude_A_fkey";

-- DropIndex
DROP INDEX "CodeSystem_uuid_key";

-- DropIndex
DROP INDEX "ValueSet_uuid_key";

-- AlterTable
ALTER TABLE "CodeSystem" DROP CONSTRAINT "CodeSystem_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "localId" BIGSERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "status" DROP NOT NULL,
ADD CONSTRAINT "CodeSystem_pkey" PRIMARY KEY ("localId");
DROP SEQUENCE "CodeSystem_id_seq";

-- AlterTable
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_pkey",
DROP COLUMN "id",
ADD COLUMN     "localId" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Concept_pkey" PRIMARY KEY ("localId");

-- AlterTable
ALTER TABLE "ValueSet" DROP CONSTRAINT "ValueSet_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "localId" BIGSERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ValueSet_pkey" PRIMARY KEY ("localId");
DROP SEQUENCE "ValueSet_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "CodeSystem_id_key" ON "CodeSystem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ValueSet_id_key" ON "ValueSet"("id");

-- AddForeignKey
ALTER TABLE "CodeSystem" ADD CONSTRAINT "CodeSystem_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("localId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("localId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("localId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ValueSetToValueSetInclude" ADD FOREIGN KEY ("A") REFERENCES "ValueSet"("localId") ON DELETE CASCADE ON UPDATE CASCADE;
