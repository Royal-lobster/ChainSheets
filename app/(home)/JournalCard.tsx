import React from "react";
import Image from "next/image";

interface PopularJournalCardProps {
  title?: string;
  description?: string;
  members?: number;
}

const JOURNAL_IMAGE_SIZE = 100;

const JournalCard = ({
  title = "AI and Machine Learning",
  description = "All papers on AI and Machine learning Research",
  members = 200,
}: PopularJournalCardProps) => {
  return (
    <div className="w-full flex items-center flex-shrink-0 bg-white rounded-lg border border-neutral-200 shadow-md overflow-hidden">
      <Image
        src="https://source.unsplash.com/random/200x200"
        alt="Dummy Image"
        className="m-6 rounded-md flex-shrink-0 overflow-hidden"
        width={JOURNAL_IMAGE_SIZE}
        height={JOURNAL_IMAGE_SIZE}
      />
      <div className="p-6 pl-0">
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
