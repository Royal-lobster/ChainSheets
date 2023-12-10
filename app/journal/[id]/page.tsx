import React from "react";
import JournalHeader from "./JournalHeader";
import PublishedPapers from "./PublishedPapers";
import UnderReviewPapers from "./UnderReviewPapers";
import prisma from "@/app/assets/server/db";
import Empty from "@/app/assets/components/Empty";

const JournalPage = async ({ params }: { params: { id: string } }) => {
  const journal = await prisma.journal.findUnique({
    where: {
      daoAddress: params.id,
    },
    include: {
      _count: {
        select: {
          paper: true,
          member: true,
        },
      },
    },
  });

  const holdersCount = await prisma.holder.count({
    where: {
      Paper: {
        Journal: {
          daoAddress: params.id,
        },
      },
    },
  });

  if (!journal) return <Empty />;
  return (
    <main className="flex flex-col gap-10">
      <JournalHeader
        id={params.id}
        journalImage={journal?.ipfsImage}
        journalTitle={journal?.title}
        topic={journal?.topic}
        description={journal?.description}
        memberButtonText="Join"
        paperButtonText="Submit Paper"
        memberCount={journal._count.member}
        paperCount={journal?._count.paper}
        holderCount={holdersCount}
      />
      <PublishedPapers id={params.id} />
      <UnderReviewPapers />
    </main>
  );
};

export default JournalPage;
