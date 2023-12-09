import PapersCard from "@/app/(home)/PapersCard";
import Section from "@/app/(layout)/Section";
import React from "react";

const PublishedPapers = () => {
  return (
    <Section title="Published Papers">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((index) => (
          <PapersCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PublishedPapers;
