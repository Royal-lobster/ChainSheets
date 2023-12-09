import { button } from "@/app/lib/variants";
import { IconFileCheck } from "@tabler/icons-react";
import React from "react";

interface UnderReviewPaperCardProps {
  title?: string;
  description?: string;
  reviewCount?: number;
  createdOn?: string;
  lastReview?: string;
}

const UnderReviewPaperCard = ({
  title = "Blockchain Vulnerability detection with LLMs",
  description = "All papers on AI and Machine learning Research",
  reviewCount = 10,
  createdOn = "12th Oct 2023",
  lastReview = "4th Dec 2023",
}: UnderReviewPaperCardProps) => {
  return (
    <div className="w-full p-6 rounded overflow-hidden shadow-md border border-neutral-200 bg-white flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div className="md:mr-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p>{description}</p>
      </div>
      {/* Center and Right side */}
      <div className="flex flex-grow mt-6 md:items-center w-full md:w-[unset] justify-between text-neutral-500 text-sm md:mt-0 md:ml-4">
        <div className="md:mx-auto">
          <p>has {reviewCount} Reviews</p>
          <p>Created on {createdOn}</p>
          <p>Last Review {lastReview}</p>
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
