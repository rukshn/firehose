-- CreateTable
CREATE TABLE "CodeSystem" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "url" TEXT,
    "version" TEXT,
    "name" TEXT,
    "title" TEXT,
    "status" TEXT NOT NULL,
    "conceptId" BIGINT,
    "experimental" BOOLEAN,
    "date" TIMESTAMP(3),
    "publisher" TEXT,
    "description" TEXT,
    "purpose" TEXT,
    "copyright" TEXT,
    "caseSensitive" BOOLEAN,
    "valueSetId" BIGINT,
    "hierarchyMeaning" TEXT,
    "compositional" BOOLEAN,
    "versionNeeded" BOOLEAN,
    "content" TEXT NOT NULL,
    "codeSystemId" BIGINT,

    CONSTRAINT "CodeSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeSystemFilter" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "operator" TEXT[],
    "value" TEXT NOT NULL,
    "codeSystemId" BIGINT,

    CONSTRAINT "CodeSystemFilter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeSystemProperty" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT,
    "codeSystemId" BIGINT,
    "conceptId" BIGINT NOT NULL,

    CONSTRAINT "CodeSystemProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extension" (
    "id" BIGSERIAL NOT NULL,
    "isModifierExtension" BOOLEAN NOT NULL,
    "codeSystemFilterId" BIGINT,
    "codeSystemPropertyId" BIGINT,
    "codingId" BIGINT,
    "conceptDesignationId" BIGINT,
    "conceptPropertyId" BIGINT,
    "conceptId" BIGINT,
    "identifierId" BIGINT,
    "periodId" BIGINT,
    "contactPointId" BIGINT,
    "contactDetailId" BIGINT,
    "useageContextId" BIGINT,
    "rangeId" BIGINT,
    "quantitiyId" BIGINT,
    "referenceId" BIGINT,
    "codeableConceptId" BIGINT,
    "valueSetId" BIGINT,
    "valueSetComposeId" BIGINT,
    "valueSetComposeIncludeId" BIGINT,
    "valueSetComposeIncludeConceptId" BIGINT,
    "valueSetComposeIncludeDesignationId" BIGINT,

    CONSTRAINT "Extension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSet" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "url" TEXT,
    "version" TEXT,
    "name" TEXT,
    "title" TEXT,
    "status" TEXT NOT NULL,
    "experimental" BOOLEAN,
    "publisher" TEXT,
    "description" TEXT,
    "immutable" BOOLEAN NOT NULL,
    "purpose" TEXT NOT NULL,
    "copyright" TEXT NOT NULL,

    CONSTRAINT "ValueSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSetCompose" (
    "id" BIGSERIAL NOT NULL,
    "lockedDate" TIMESTAMP(3) NOT NULL,
    "inactive" BOOLEAN NOT NULL,

    CONSTRAINT "ValueSetCompose_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSetComposeInclude" (
    "id" BIGSERIAL NOT NULL,
    "excluded" BOOLEAN,
    "valueSetComposeId" BIGINT,
    "system" TEXT,
    "version" TEXT,

    CONSTRAINT "ValueSetComposeInclude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSetComposeIncludeConcept" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT,
    "display" TEXT,
    "valueSetComposeIncludeId" BIGINT,

    CONSTRAINT "ValueSetComposeIncludeConcept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValueSetComposeIncludeDesignation" (
    "id" BIGSERIAL NOT NULL,
    "language" TEXT,
    "value" TEXT,
    "codingId" BIGINT,

    CONSTRAINT "ValueSetComposeIncludeDesignation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeableConcept" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT,
    "codeSystemId" BIGINT,
    "valueSetId" BIGINT,

    CONSTRAINT "CodeableConcept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UseageContext" (
    "id" BIGSERIAL NOT NULL,
    "codeSystemId" BIGINT,
    "codingId" BIGINT NOT NULL,
    "codeableConceptId" BIGINT,
    "quantitiyId" BIGINT,
    "rangeId" BIGINT,
    "referenceId" BIGINT,
    "valueSetId" BIGINT,

    CONSTRAINT "UseageContext_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Range" (
    "id" BIGSERIAL NOT NULL,
    "lowQuantityId" BIGINT NOT NULL,
    "highQuantitiyId" BIGINT NOT NULL,

    CONSTRAINT "Range_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT,
    "type" TEXT,
    "display" TEXT,
    "identifierId" BIGINT,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quantitiy" (
    "id" BIGSERIAL NOT NULL,
    "value" DECIMAL(65,30),
    "comparator" TEXT,
    "unit" TEXT,
    "system" TEXT,
    "code" TEXT,
    "isSimpleQuantity" BOOLEAN,

    CONSTRAINT "Quantitiy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactPoint" (
    "id" BIGSERIAL NOT NULL,
    "system" TEXT,
    "value" TEXT,
    "use" TEXT,
    "rank" INTEGER,
    "periodId" BIGINT NOT NULL,
    "contactDetailId" BIGINT,

    CONSTRAINT "ContactPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactDetail" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "codeSystemId" BIGINT,
    "valueSetId" BIGINT,

    CONSTRAINT "ContactDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Identifier" (
    "id" BIGSERIAL NOT NULL,
    "use" TEXT,
    "system" TEXT,
    "value" TEXT,
    "assigner" TEXT,
    "codeSystemId" BIGINT,
    "codeableConceptId" BIGINT,
    "valueSetId" BIGINT,

    CONSTRAINT "Identifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" BIGSERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concept" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "display" TEXT,
    "definition" TEXT,
    "conceptId" BIGINT,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptDesignation" (
    "id" BIGSERIAL NOT NULL,
    "conceptId" BIGINT,
    "language" TEXT,
    "value" TEXT NOT NULL,
    "codingId" BIGINT NOT NULL,

    CONSTRAINT "ConceptDesignation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptProperty" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "valueCode" TEXT,
    "valueString" TEXT,
    "valueInteger" INTEGER NOT NULL,
    "valueBoolean" BOOLEAN NOT NULL,
    "valueDecimal" DECIMAL(65,30) NOT NULL,
    "conceptId" BIGINT,
    "codingId" BIGINT,

    CONSTRAINT "ConceptProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coding" (
    "id" BIGSERIAL NOT NULL,
    "userSelected" BOOLEAN,
    "codeSystemId" BIGINT NOT NULL,

    CONSTRAINT "Coding_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CodeSystem" ADD CONSTRAINT "CodeSystem_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSystem" ADD CONSTRAINT "CodeSystem_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSystem" ADD CONSTRAINT "CodeSystem_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSystemFilter" ADD CONSTRAINT "CodeSystemFilter_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSystemProperty" ADD CONSTRAINT "CodeSystemProperty_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSystemProperty" ADD CONSTRAINT "CodeSystemProperty_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_codeSystemFilterId_fkey" FOREIGN KEY ("codeSystemFilterId") REFERENCES "CodeSystemFilter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_codeSystemPropertyId_fkey" FOREIGN KEY ("codeSystemPropertyId") REFERENCES "CodeSystemProperty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_codingId_fkey" FOREIGN KEY ("codingId") REFERENCES "Coding"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_conceptDesignationId_fkey" FOREIGN KEY ("conceptDesignationId") REFERENCES "ConceptDesignation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_conceptPropertyId_fkey" FOREIGN KEY ("conceptPropertyId") REFERENCES "ConceptProperty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_identifierId_fkey" FOREIGN KEY ("identifierId") REFERENCES "Identifier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_contactPointId_fkey" FOREIGN KEY ("contactPointId") REFERENCES "ContactPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_contactDetailId_fkey" FOREIGN KEY ("contactDetailId") REFERENCES "ContactDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_useageContextId_fkey" FOREIGN KEY ("useageContextId") REFERENCES "UseageContext"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_quantitiyId_fkey" FOREIGN KEY ("quantitiyId") REFERENCES "Quantitiy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Reference"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_codeableConceptId_fkey" FOREIGN KEY ("codeableConceptId") REFERENCES "CodeableConcept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_valueSetComposeId_fkey" FOREIGN KEY ("valueSetComposeId") REFERENCES "ValueSetCompose"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_valueSetComposeIncludeId_fkey" FOREIGN KEY ("valueSetComposeIncludeId") REFERENCES "ValueSetComposeInclude"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_valueSetComposeIncludeConceptId_fkey" FOREIGN KEY ("valueSetComposeIncludeConceptId") REFERENCES "ValueSetComposeIncludeConcept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_valueSetComposeIncludeDesignationId_fkey" FOREIGN KEY ("valueSetComposeIncludeDesignationId") REFERENCES "ValueSetComposeIncludeDesignation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValueSetComposeInclude" ADD CONSTRAINT "ValueSetComposeInclude_valueSetComposeId_fkey" FOREIGN KEY ("valueSetComposeId") REFERENCES "ValueSetCompose"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValueSetComposeIncludeConcept" ADD CONSTRAINT "ValueSetComposeIncludeConcept_valueSetComposeIncludeId_fkey" FOREIGN KEY ("valueSetComposeIncludeId") REFERENCES "ValueSetComposeInclude"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValueSetComposeIncludeDesignation" ADD CONSTRAINT "ValueSetComposeIncludeDesignation_codingId_fkey" FOREIGN KEY ("codingId") REFERENCES "Coding"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeableConcept" ADD CONSTRAINT "CodeableConcept_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeableConcept" ADD CONSTRAINT "CodeableConcept_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_codingId_fkey" FOREIGN KEY ("codingId") REFERENCES "Coding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_codeableConceptId_fkey" FOREIGN KEY ("codeableConceptId") REFERENCES "CodeableConcept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_quantitiyId_fkey" FOREIGN KEY ("quantitiyId") REFERENCES "Quantitiy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Reference"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseageContext" ADD CONSTRAINT "UseageContext_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Range" ADD CONSTRAINT "Range_lowQuantityId_fkey" FOREIGN KEY ("lowQuantityId") REFERENCES "Quantitiy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Range" ADD CONSTRAINT "Range_highQuantitiyId_fkey" FOREIGN KEY ("highQuantitiyId") REFERENCES "Quantitiy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_identifierId_fkey" FOREIGN KEY ("identifierId") REFERENCES "Identifier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactPoint" ADD CONSTRAINT "ContactPoint_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactPoint" ADD CONSTRAINT "ContactPoint_contactDetailId_fkey" FOREIGN KEY ("contactDetailId") REFERENCES "ContactDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "ContactDetail_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactDetail" ADD CONSTRAINT "ContactDetail_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_codeableConceptId_fkey" FOREIGN KEY ("codeableConceptId") REFERENCES "CodeableConcept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_valueSetId_fkey" FOREIGN KEY ("valueSetId") REFERENCES "ValueSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptDesignation" ADD CONSTRAINT "ConceptDesignation_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptDesignation" ADD CONSTRAINT "ConceptDesignation_codingId_fkey" FOREIGN KEY ("codingId") REFERENCES "Coding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptProperty" ADD CONSTRAINT "ConceptProperty_codingId_fkey" FOREIGN KEY ("codingId") REFERENCES "Coding"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptProperty" ADD CONSTRAINT "ConceptProperty_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coding" ADD CONSTRAINT "Coding_codeSystemId_fkey" FOREIGN KEY ("codeSystemId") REFERENCES "CodeSystem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
