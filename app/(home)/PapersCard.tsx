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
    <div className="w-full rounded overflow-hidden shadow-lg p-4 text-gray-700 border border-gray-200">
      <div className="inline px-2 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wide">
        {category}
      </div>
      <div className="mt-2 mb-4">
        <div className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2">
          {title}
        </div>
        <p className="text-gray-700 text-sm md:text-base line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{author}</span>
        <span className="inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {holders} Holders
        </span>
      </div>
    </div>
  );
};

export default PapersCard;
