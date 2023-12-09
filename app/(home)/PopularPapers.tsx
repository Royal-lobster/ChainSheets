import React from "react";
import Section from "../(layout)/Section";
import PopularPapersCard from "./PopularPapersCard";

const PopularPapers = () => {
  return (
    <Section title="Popular Journals">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((index) => (
          <PopularPapersCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PopularPapers;
