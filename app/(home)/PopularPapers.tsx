import React from "react";
import Section from "../(layout)/Section";
import PapersCard from "./PapersCard";

const PopularPapers = () => {
  return (
    <Section title="Popular Papers">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((index) => (
          <PapersCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PopularPapers;
