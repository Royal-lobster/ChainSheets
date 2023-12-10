import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreatePaperArgs = {
    journalId: string;
    title: string;
    description: string;
    filehash: string;
    ipfsImage: string;
};

export async function createPaperOnDB(args: CreatePaperArgs): Promise<void> {
  try {
    await prisma.paper.create({
      data: {
        title: args.title,
        description: args.description,
        filehash: args.filehash,
        ipfsImage: args.ipfsImage,
      },
    });
    console.log('Paper proposal created successfully');
  } catch (error) {
    console.error('Error creating paper proposal:', error);
    throw error;
  }
}
