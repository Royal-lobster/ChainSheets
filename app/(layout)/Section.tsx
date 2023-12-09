import React, { ReactNode } from "react";
import { cn } from "../assets/lib/helpers/cn";

type SectionProps = {
  icon?: ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Section = ({
  title,
  children,
  className,
  icon,
  ...props
}: SectionProps) => {
  return (
    <section {...props} className={cn("flex flex-col gap-8", className)}>
      <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4">
        {icon}
        <h2 className="text-center sm:text-left text-2xl sm:text-3xl font-bold">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
