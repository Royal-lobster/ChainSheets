import React from "react";
import Section from "../(layout)/Section";
import PapersCard from "./PapersCard";
import { IconFiles } from "@tabler/icons-react";

const PopularPapers = () => {
  return (
    <Section title="Popular Papers" icon={<IconFiles size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((index) => (
          <PapersCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PopularPapers;
