import React from "react";
import Section from "../(layout)/Section";
import JournalCard from "./JournalCard";
import { IconBook } from "@tabler/icons-react";

const PopularJournals = () => {
  return (
    <Section title="Popular Journals" icon={<IconBook size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((i) => (
          <JournalCard key={i} />
        ))}
      </div>
    </Section>
  );
};

export default PopularJournals;
