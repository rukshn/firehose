/*
  Warnings:

  - You are about to drop the column `codeSystemId` on the `CodeSystem` table. All the data in the column will be lost.
  - You are about to drop the column `conceptId` on the `CodeSystem` table. All the data in the column will be lost.
  - You are about to drop the column `narrativeId` on the `CodeSystem` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `ValueSet` table. All the data in the column will be lost.
  - You are about to drop the `CodeSystemFilter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CodeSystemProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CodeableConcept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Coding` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConceptDesignation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConceptProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactPoint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Extension` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Identifier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Narrative` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Period` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quantitiy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Range` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UseageContext` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ValueSetCompose` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ValueSetComposeInclude` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ValueSetComposeIncludeConcept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ValueSetComposeIncludeDesignation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `CodeSystem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `ValueSet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CodeSystem" DROP CONSTRAINT "CodeSystem_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSystem" DROP CONSTRAINT "CodeSystem_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSystem" DROP CONSTRAINT "CodeSystem_narrativeId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSystemFilter" DROP CONSTRAINT "CodeSystemFilter_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSystemProperty" DROP CONSTRAINT "CodeSystemProperty_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "CodeSystemProperty" DROP CONSTRAINT "CodeSystemProperty_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "CodeableConcept" DROP CONSTRAINT "CodeableConcept_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "CodeableConcept" DROP CONSTRAINT "CodeableConcept_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "Coding" DROP CONSTRAINT "Coding_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "ConceptDesignation" DROP CONSTRAINT "ConceptDesignation_codingId_fkey";

-- DropForeignKey
ALTER TABLE "ConceptDesignation" DROP CONSTRAINT "ConceptDesignation_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "ConceptProperty" DROP CONSTRAINT "ConceptProperty_codingId_fkey";

-- DropForeignKey
ALTER TABLE "ConceptProperty" DROP CONSTRAINT "ConceptProperty_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "ContactDetail" DROP CONSTRAINT "ContactDetail_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "ContactDetail" DROP CONSTRAINT "ContactDetail_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "ContactPoint" DROP CONSTRAINT "ContactPoint_contactDetailId_fkey";

-- DropForeignKey
ALTER TABLE "ContactPoint" DROP CONSTRAINT "ContactPoint_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_codeSystemFilterId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_codeSystemPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_codeableConceptId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_codingId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_conceptDesignationId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_conceptId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_conceptPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_contactDetailId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_contactPointId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_identifierId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_narrativeId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_quantitiyId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_rangeId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_referenceId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_useageContextId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_valueSetComposeId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_valueSetComposeIncludeConceptId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_valueSetComposeIncludeDesignationId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_valueSetComposeIncludeId_fkey";

-- DropForeignKey
ALTER TABLE "Extension" DROP CONSTRAINT "Extension_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_codeableConceptId_fkey";

-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "Range" DROP CONSTRAINT "Range_highQuantitiyId_fkey";

-- DropForeignKey
ALTER TABLE "Range" DROP CONSTRAINT "Range_lowQuantityId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_identifierId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_codeSystemId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_codeableConceptId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_codingId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_quantitiyId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_rangeId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_referenceId_fkey";

-- DropForeignKey
ALTER TABLE "UseageContext" DROP CONSTRAINT "UseageContext_valueSetId_fkey";

-- DropForeignKey
ALTER TABLE "ValueSetComposeInclude" DROP CONSTRAINT "ValueSetComposeInclude_valueSetComposeId_fkey";

-- DropForeignKey
ALTER TABLE "ValueSetComposeIncludeConcept" DROP CONSTRAINT "ValueSetComposeIncludeConcept_valueSetComposeIncludeId_fkey";

-- DropForeignKey
ALTER TABLE "ValueSetComposeIncludeDesignation" DROP CONSTRAINT "ValueSetComposeIncludeDesignation_codingId_fkey";

-- AlterTable
ALTER TABLE "CodeSystem" DROP COLUMN "codeSystemId",
DROP COLUMN "conceptId",
DROP COLUMN "narrativeId",
ADD COLUMN     "contact" JSONB,
ADD COLUMN     "extension" JSONB,
ADD COLUMN     "filter" JSONB,
ADD COLUMN     "identifier" JSONB,
ADD COLUMN     "implicitRules" TEXT,
ADD COLUMN     "jurisdiction" JSONB,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "meta" JSONB,
ADD COLUMN     "modifierExtension" JSONB,
ADD COLUMN     "property" JSONB,
ADD COLUMN     "supliments" TEXT,
ADD COLUMN     "text" JSONB,
ADD COLUMN     "useContext" JSONB,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Concept" ADD COLUMN     "codeSystemId" BIGINT,
ADD COLUMN     "deprecationDate" TIMESTAMP(3),
ADD COLUMN     "designation" JSONB,
ADD COLUMN     "extension" JSONB,
ADD COLUMN     "notSelectable" BOOLEAN,
ADD COLUMN     "property" JSONB,
ADD COLUMN     "retirementDate" TIMESTAMP(3),
ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "ValueSet" DROP COLUMN "version",
ADD COLUMN     "composeInactive" BOOLEAN,
ADD COLUMN     "composeLockedDate" TIMESTAMP(3),
ADD COLUMN     "contact" JSONB,
ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "extension" JSONB,
ADD COLUMN     "identifier" JSONB,
ADD COLUMN     "implicieRules" TEXT,
ADD COLUMN     "jurisdiction" JSONB,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "meta" JSONB,
ADD COLUMN     "modifierExtension" JSONB,
ADD COLUMN     "text" JSONB,
ADD COLUMN     "useContext" JSONB,
ADD COLUMN     "versoin" TEXT,
ALTER COLUMN "immutable" DROP NOT NULL,
ALTER COLUMN "purpose" DROP NOT NULL,
ALTER COLUMN "copyright" DROP NOT NULL;

-- DropTable
DROP TABLE "CodeSystemFilter";

-- DropTable
DROP TABLE "CodeSystemProperty";

-- DropTable
DROP TABLE "CodeableConcept";

-- DropTable
DROP TABLE "Coding";

-- DropTable
DROP TABLE "ConceptDesignation";

-- DropTable
DROP TABLE "ConceptProperty";

-- DropTable
DROP TABLE "ContactDetail";

-- DropTable
DROP TABLE "ContactPoint";

-- DropTable
DROP TABLE "Extension";

-- DropTable
DROP TABLE "Identifier";

-- DropTable
DROP TABLE "Narrative";

-- DropTable
DROP TABLE "Period";

-- DropTable
DROP TABLE "Quantitiy";

-- DropTable
DROP TABLE "Range";

-- DropTable
DROP TABLE "Reference";

-- DropTable
DROP TABLE "UseageContext";

-- DropTable
DROP TABLE "ValueSetCompose";

-- DropTable
DROP TABLE "ValueSetComposeInclude";

-- DropTable
DROP TABLE "ValueSetComposeIncludeConcept";

-- DropTable
DROP TABLE "ValueSetComposeIncludeDesignation";

-- CreateTable
CREATE TABLE "ValueSetInclude" (
    "id" BIGSERIAL NOT NULL,
    "extension" JSONB,
    "system" TEXT,
    "version" TEXT,
    "filter" JSONB,
    "isExluded" BOOLEAN,

    CONSTRAINT "ValueSetInclude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSetConcept" (
    "id" BIGSERIAL NOT NULL,
    "extension" JSONB,
    "display" TEXT,
    "code" TEXT,
    "designation" JSONB,
    "valueSetIncludeId" BIGINT,

    CONSTRAINT "ValueSetConcept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ValueSetToValueSetInclude" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ValueSetToValueSetInclude_AB_unique" ON "_ValueSetToValueSetInclude"("A", "B");

-- CreateIndex
CREATE INDEX "_ValueSetToValueSetInclude_B_index" ON "_ValueSetToValueSetInclude"("B");

-- CreateIndex
CREATE UNIQUE INDEX "CodeSystem_uuid_key" ON "CodeSystem"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ValueSet_uuid_key" ON "ValueSet"("uuid");

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValueSetConcept" ADD CONSTRAINT "ValueSetConcept_valueSetIncludeId_fkey" FOREIGN KEY ("valueSetIncludeId") REFERENCES "ValueSetInclude"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ValueSetToValueSetInclude" ADD FOREIGN KEY ("A") REFERENCES "ValueSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ValueSetToValueSetInclude" ADD FOREIGN KEY ("B") REFERENCES "ValueSetInclude"("id") ON DELETE CASCADE ON UPDATE CASCADE;
