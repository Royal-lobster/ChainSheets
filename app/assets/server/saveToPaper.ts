import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateJournalArgs = {
    journalId: number;
    title: string;
    description: string;
    filehash: string;
    reviewId: number;
    ipfsImage: string;
};

export async function createJournal(args: CreateJournalArgs): Promise<void> {
  try {
    await prisma.paper.create({
      data: {
        journalId: args.journalId,
        title: args.title,
        description: args.description,
        filehash: args.filehash,
        reviewId: args.reviewId,
        ipfsImage: args.ipfsImage,
      },
    });
    console.log('Journal entry created successfully');
  } catch (error) {
    console.error('Error creating journal entry:', error);
    throw error;
  }
}
