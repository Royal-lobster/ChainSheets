import React from "react";

const PopularPapersCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-4 text-gray-700">
      <div className="inline px-2 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wide">
        AI and Machine Learning
      </div>
      <div className="mt-2 mb-4">
        <div className="text-xl font-bold text-gray-900 line-clamp-2">
          Blockchain Vulnerability detection with LLMs
        </div>
        <p className="text-gray-700 text-base line-clamp-2">
          All papers on AI and Machine learning Research
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          By 0x145...2352, srujangurram.eth
        </span>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          200 Holders
        </span>
      </div>
    </div>
  );
};

export default PopularPapersCard;
