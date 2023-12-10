import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateJournalArgs = {
  title: string;
  description: string;
  topic: string;
  daoAddress: string;
  ipfsImage: string;
};

export async function createJournalOnDB(args: CreateJournalArgs): Promise<void> {
  try {
    await prisma.journal.create({
      data: {
        title: args.title,
        description: args.description,
        topic: args.topic,
        daoAddress: args.daoAddress,
        ipfsImage: args.ipfsImage,
      },
    });
    console.log('Journal entry created successfully');
  } catch (error) {
    console.error('Error creating journal entry:', error);
    throw error;
  }
}
