import React from "react";
import Section from "../(layout)/Section";
import PapersCard from "./PapersCard";
import { IconFiles } from "@tabler/icons-react";
import prisma from "../assets/server/db";

const PopularPapers = async () => {
  const popularPapers = await prisma.paper.findMany({
    orderBy: {
      holder: {
        _count: "desc",
      },
    },
    include: {
      holder: true,
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
    <Section title="Popular Papers" icon={<IconFiles size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularPapers.map((paper) => (
          <PapersCard
            category={paper.Journal?.topic || "Uncategorized"}
            title={paper.title}
            description={paper.description}
            author={paper.publisher.address}
            holders={paper.holder.length}
            key={paper.id}
          />
        ))}
      </div>
    </Section>
  );
};

export default PopularPapers;
