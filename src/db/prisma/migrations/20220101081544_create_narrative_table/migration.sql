-- AlterTable
ALTER TABLE "CodeSystem" ADD COLUMN     "narrativeId" BIGINT;

-- AlterTable
ALTER TABLE "Extension" ADD COLUMN     "narrativeId" BIGINT;

-- CreateTable
CREATE TABLE "Narrative" (
    "id" BIGSERIAL NOT NULL,
    "status" TEXT,
    "div" TEXT,

    CONSTRAINT "Narrative_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CodeSystem" ADD CONSTRAINT "CodeSystem_narrativeId_fkey" FOREIGN KEY ("narrativeId") REFERENCES "Narrative"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_narrativeId_fkey" FOREIGN KEY ("narrativeId") REFERENCES "Narrative"("id") ON DELETE SET NULL ON UPDATE CASCADE;
