import React from "react";

const PopularJournalCard = () => {
  return (
    <div className="w-full flex flex-shrink-0 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="w-24 h-24 m-2 rounded-md bg-purple-600 flex-shrink-0 overflow-hidden"></div>
      <div className="p-4">
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-1">
          AI and Machine Learning
        </h1>
        <p className="text-gray-700 text-sm md:text-base line-clamp-1">
          All papers on AI and Machine learning Research
        </p>
        <p className="text-gray-600 bg-red-100 inline-block text-xs md:text-sm mt-2">
          200 Members
        </p>
      </div>
    </div>
  );
};

export default PopularJournalCard;
