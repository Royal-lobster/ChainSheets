import React, { ReactNode } from "react";
import { cn } from "../lib/cn";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Section = ({ title, children, className, ...props }: SectionProps) => {
  return (
    <section {...props} className={cn("flex flex-col gap-8", className)}>
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
