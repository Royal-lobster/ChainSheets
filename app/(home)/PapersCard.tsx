import React from "react";
import { chip } from "../assets/lib/helpers/variants";
import Link from "next/link";

interface PopularPapersCardProps {
  id: number;
  category: string;
  title: string;
  description: string;
  author?: string;
  holders: number;
}

const PapersCard = ({
  id,
  category,
  title,
  description,
  author,
  holders,
}: PopularPapersCardProps) => {
  return (
    <div className="w-full rounded-lg bg-white overflow-hidden shadow-md p-6 border border-neutral-200">
      <div className={chip()}>{category}</div>
      <div className="mt-2 mb-4">
        <Link
          href={`/paper/${id}`}
          className="text-lg md:text-2xl font-bold line-clamp-2"
        >
          {title}
        </Link>
        <p className="text-neutral-700 text-sm md:text-base line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-neutral-500">{author}</span>
        <span className="inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {holders} Holders
        </span>
      </div>
    </div>
  );
};

export default PapersCard;
