import Section from "@/app/(layout)/Section";
import { IconBook } from "@tabler/icons-react";
import React from "react";

const PaperReviews = () => {
  return (
    <Section title="Reviews" icon={<IconBook size={32} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((i) => (
          <PaperReviews key={i} />
        ))}
      </div>
    </Section>
  );
};

export default PaperReviews;
