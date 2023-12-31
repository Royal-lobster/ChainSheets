import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type createReviewArgs = {
  memberAddress: string;
  publisherAddress: string;
  reviewTitle: string;
  reviewDetails: string;
  reviewStatus: string;
};

export async function createReviewOnDB(args: createReviewArgs) {
  try {
    const member = await prisma.member.findUnique({
      where: { address: args.memberAddress },
    });
    if (!member) {
      throw new Error('Member not found');
    }

    const publisher = await prisma.publisher.findUnique({
      where: { address: args.publisherAddress },
    });
    if (!publisher) {
      throw new Error('Publisher not found');
    }

    await prisma.review.create({
      data: {
        memberId: member.id,
        publisherId: publisher.id,
        reviewTitle: args.reviewTitle,
        reviewDetails: args.reviewDetails,
      },
    });
    console.log('Review entry created successfully');
  } catch (error) {
    console.error('Error creating review entry:', error);
    throw error;
  }
}
