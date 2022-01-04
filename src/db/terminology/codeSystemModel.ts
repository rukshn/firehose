import { Prisma, PrismaClient } from "@prisma/client";
import { CodeSystem } from "../../4.0.1/resources/codeSystem";
const prisma = new PrismaClient();

const createResource = async (resource: object) => {
  try {
    const newCodeSystem = await prisma.codeSystem.create({
      data: {
        url: (resource as any).url,
        identifier: (resource as any).identifier,
        version: (resource as any).version as string,
        name: (resource as any).name as string,
        title: (resource as any).title as string,
        status: (resource as any).status as string,
        experimental: (resource as any).experimental,
        date: new Date(),
        publisher: (resource as any).publisher as string,
        contact: (resource as any).contact,
        description: (resource as any).description,
        useContext: (resource as any).useContext,
        jurisdiction: (resource as any).jurisdiction,
        purpose: (resource as any).purpose,
        copyright: (resource as any).copyright,
        caseSensitive: (resource as any).caseSensitive,
        hierarchyMeaning: (resource as any).hierarchyMeaning,
        compositional: (resource as any).compositional,
        versionNeeded: (resource as any).versionNeeded,
        content: (resource as any).content,
        supplements: (resource as any).supplements,
        filter: (resource as any).filter,
        property: (resource as any).property,
      },
    });
    return { status: "success", resource: newCodeSystem };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return { status: "error", messsage: e.message };
    }
  }
};

exports.createResource = createResource;
