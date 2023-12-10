import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreatePaperArgs = {
    journalId: number;
    title: string;
    description: string;
    filehash: string;
    ipfsImage: string;
};

export async function createPaper(args: CreatePaperArgs): Promise<void> {
  try {
    await prisma.paper.create({
      data: {
        journalId: args.journalId,
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
