import React from "react";

interface PopularJournalCardProps {
  title?: string;
  description?: string;
  members?: number;
}

const JournalCard = ({
  title = "AI and Machine Learning",
  description = "All papers on AI and Machine learning Research",
  members = 200,
}: PopularJournalCardProps) => {
  return (
    <div className="w-full flex flex-shrink-0 bg-white rounded-lg border border-neutral-200 shadow-md overflow-hidden">
      <div className="w-24 h-24 m-2 rounded-md bg-purple-600 flex-shrink-0 overflow-hidden"></div>
      <div className="p-4">
        <h1 className="text-lg md:text-xl font-semibold text-neutral-900 line-clamp-1">
          {title}
        </h1>
        <p className="text-neutral-700 text-sm md:text-base line-clamp-1">
          {description}
        </p>
        <p className="text-neutral-600 bg-red-100 inline-block text-xs md:text-sm mt-2">
          {members} Members
        </p>
      </div>
    </div>
  );
};

export default JournalCard;
