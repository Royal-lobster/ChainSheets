import React from "react";

interface PopularPapersCardProps {
  category?: string;
  title?: string;
  description?: string;
  author?: string;
  holders?: number;
}

const PapersCard = ({
  category = "AI and Machine Learning",
  title = "Blockchain Vulnerability detection with LLMs",
  description = "All papers on AI and Machine learning Research",
  author = "0x145...2352, srujangurram.eth",
  holders = 200,
}: PopularPapersCardProps) => {
  return (
    <div className="w-full rounded-lg bg-white overflow-hidden shadow-md p-6 border border-neutral-200">
      <div className="inline px-2 py-1 bg-neutral-200 text-neutral-500 text-xs rounded-full uppercase tracking-wide">
        {category}
      </div>
      <div className="mt-2 mb-4">
        <div className="text-lg md:text-2xl font-bold line-clamp-2">
          {title}
        </div>
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
