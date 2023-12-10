import Section from "@/app/(layout)/Section";
import React from "react";
import UnderReviewPaperCard from "./UnderReviewPaperCard";
import prisma from "@/app/assets/server/db";

const UnderReviewPapers = async () => {
  const underReviewPapers = await prisma.paper.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      _count: {
        select: {
          reviews: true,
        },
      },
      publisher: {
        select: {
          address: true,
        },
      },
      Journal: {
        select: {
          topic: true,
        },
      },
    },
  });
  return (
    <Section title="Under Review Papers">
      <div className="flex flex-col gap-4">
        {underReviewPapers.map((paper) => (
          <UnderReviewPaperCard
            title={paper.title}
            description={paper.description}
            createdOn={paper.createdAt.toString()}
            reviewCount={paper._count.reviews}
            lastReview={paper.updatedAt.toString()}
            key={paper.id}
          />
        ))}
      </div>
    </Section>
  );
};

export default UnderReviewPapers;
