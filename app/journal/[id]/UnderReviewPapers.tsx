import Section from "@/app/(layout)/Section";
import React from "react";
import UnderReviewPaperCard from "./UnderReviewPaperCard";

const UnderReviewPapers = () => {
  return (
    <Section title="Under Review Papers">
      <div className="flex flex-col gap-4">
        {[...Array(4)].map((index) => (
          <UnderReviewPaperCard key={index} />
        ))}
      </div>
    </Section>
  );
};

export default UnderReviewPapers;
