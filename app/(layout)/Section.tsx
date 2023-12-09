import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center sm:text-left text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
