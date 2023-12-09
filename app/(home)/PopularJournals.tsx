import React from "react";
import Section from "../(layout)/Section";
import JournalCard from "./JournalCard";

const PopularJournals = () => {
  return (
    <Section title="Popular Journals">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((index) => (
          <JournalCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PopularJournals;
