import { button } from "@/app/assets/lib/helpers/variants";
import { IconFileCheck } from "@tabler/icons-react";
import React from "react";

interface UnderReviewPaperCardProps {
  title: string;
  description: string;
  reviewCount: number;
  createdOn: string;
  lastReview: string;
}

const UnderReviewPaperCard = ({
  title,
  description,
  reviewCount,
  createdOn,
  lastReview,
}: UnderReviewPaperCardProps) => {
  return (
    <div className="w-full p-6 rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-white flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div className="md:mr-4">
        <div className="font-bold line-clamp-2 text-xl mb-2">{title}</div>
        <p className="line-clamp-2">{description}</p>
      </div>
      {/* Center and Right side */}
      <div className="flex flex-grow flex-wrap gap-6 mt-6 md:items-center w-full md:w-[unset] justify-between text-neutral-500 text-sm md:mt-0 md:ml-4">
        <div className="md:mx-auto">
          <p>
            has <span className="text-lg text-neutral-900">{reviewCount}</span>{" "}
            Reviews
          </p>
          <p>
            Created on{" "}
            <span className="text-lg text-neutral-900">{createdOn}</span>
          </p>
          <p>
            Last Review{" "}
            <span className="text-lg text-neutral-900">{lastReview}</span>
          </p>
        </div>
        <button className={button()}>
          <IconFileCheck />
          Review
        </button>
      </div>
    </div>
  );
};

export default UnderReviewPaperCard;
