import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreatePaperArgs = {
    journalId: string;
    title: string;
    description: string;
    filehash: string;
    publisher: string;
};

export async function createPaperOnDB(args: CreatePaperArgs): Promise<void> {
  try {
    await prisma.paper.create({
      data: {
        status: 'PENDING',
        title: args.title,
        publisher: {
          connectOrCreate: {
            where: {
              address: args.publisher,
            },
            create: {
              address: args.publisher,
            }
          }
        },
        description: args.description,
        filehash: args.filehash,
      },
    });
    console.log('Paper proposal created successfully');
  } catch (error) {
    console.error('Error creating paper proposal:', error);
    throw error;
  }
}
