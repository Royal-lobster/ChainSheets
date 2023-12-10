import React from "react";
import Section from "../(layout)/Section";
import JournalCard from "./JournalCard";
import { IconBook } from "@tabler/icons-react";
import prisma from "../assets/server/db";

const PopularJournals = async () => {
  const popularJournals = await prisma.journal.findMany({
    include: {
      paper: {
        orderBy: {
          holder: {
            _count: "desc",
          },
        },
      },
      _count: {
        select: {
          member: true,
        },
      },
    },
  });

  return (
    <Section title="Popular Journals" icon={<IconBook size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularJournals.map((journal) => (
          <JournalCard
            title={journal.title}
            description={journal.description}
            members={journal._count.member}
            key={journal.id}
          />
        ))}
      </div>
    </Section>
  );
};

export default PopularJournals;
