import React from "react";

const UnderReviewPaperCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-md border border-neutral-200 p-4 bg-white flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div className="md:mr-4">
        <div className="font-bold text-xl mb-2">
          Blockchain Vulnerability detection with LLMs
        </div>
        <p className="text-neutral-700 text-base">
          All papers on AI and Machine learning Research
        </p>
      </div>
      {/* Center and Right side */}
      <div className="flex flex-grow mt-6 md:items-center w-full md:w-[unset] justify-between text-neutral-600 text-sm md:mt-0 md:ml-4">
        <div className="md:mx-auto">
          <p>has 10 Reviews</p>
          <p>Created on 12th Oct 2023</p>
          <p>Last Review 4th Dec 2023</p>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-neutral-800 transition-colors duration-300 mt-4 md:mt-0">
          Review
        </button>
      </div>
    </div>
  );
};

export default UnderReviewPaperCard;
