import PapersCard from "@/app/(home)/PapersCard";
import Section from "@/app/(layout)/Section";
import prisma from "@/app/assets/server/db";
import React from "react";

const PublishedPapers = async ({ id }: { id: string }) => {
  const publishedPapers = await prisma.journal.findUnique({
    where: {
      daoAddress: id,
    },
    include: {
      paper: {
        include: {
          _count: {
            select: {
              holder: true,
            },
          },
          publisher: {
            select: {
              address: true,
            },
          },
        },
      },
    },
  });

  return (
    <Section title="Published Papers">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {publishedPapers?.paper.map((paper) => (
          <PapersCard
            id={paper.id}
            category={publishedPapers.topic}
            title={paper.title}
            description={paper.description}
            author={paper.publisher.address}
            holders={paper._count.holder}
            key={paper.id}
          />
        ))}
      </div>
    </Section>
  );
};

export default PublishedPapers;
