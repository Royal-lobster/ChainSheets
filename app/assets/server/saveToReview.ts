import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateReviewArgs = {
  memberId: number;
  publisherId: number;
  reviewTitle: string;
  reviewDetails: string;
  reviewStatus: string;
};

export async function createReview(args: CreateReviewArgs): Promise<void> {
  try {
    await prisma.review.create({
      data: {
        memberId: args.memberId,
        publisherId: args.publisherId,
        reviewTitle: args.reviewTitle,
        reviewDetails: args.reviewDetails,
        reviewStatus: args.reviewStatus,
      },
    });
    console.log('Review entry created successfully');
  } catch (error) {
    console.error('Error creating review entry:', error);
    throw error;
  }
}
