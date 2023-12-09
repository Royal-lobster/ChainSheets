import React from "react";
import Image from "next/image";

interface JournalHeaderProps {
  journalImage?: string;
  journalTitle?: string;
  topic?: string;
  description?: string;
  memberButtonText?: string;
  paperButtonText?: string;
  memberCount?: number;
  paperCount?: number;
  holderCount?: number;
}

const JOURNAL_IMAGE_SIZE = 180;

const JournalHeader = ({
  journalImage: sectionIconSrc = "https://source.unsplash.com/random/500x500",
  journalTitle: sectionTitle = "AI and Machine Learning",
  topic = "Artificial Intelligence",
  description = "All papers on AI and Machine learning Research",
  memberButtonText = "Become Member",
  paperButtonText = "Submit Paper",
  memberCount = 1000,
  paperCount = 120,
  holderCount = 1400,
}: JournalHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center sm:justify-between items-center">
      <div className="flex gap-8 justify-center sm:justify-between items-center flex-wrap">
        {/* Left side image / icon */}
        <div className="flex-shrink-0">
          <Image
            className="rounded"
            src={sectionIconSrc}
            width={JOURNAL_IMAGE_SIZE}
            height={JOURNAL_IMAGE_SIZE}
            alt="Section Icon"
          />
        </div>

        {/* Center content */}
        <div className="flex gap-1 flex-col text-center sm:text-left">
          <div className="w-max px-1.5 mx-auto sm:mx-0 p-0.5 text-sm rounded-full bg-neutral-200 text-neutral-500">
            {topic}
          </div>
          <div className="font-bold text-2xl md:text-3xl mt-2">
            {sectionTitle}
          </div>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <div className="flex mt-4 space-x-4 flex-wrap">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              {memberButtonText}
            </button>
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black rounded">
              {paperButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Right side stats */}
      <div className="flex flex-col mt-10 sm:p-4 items-center sm:items-start">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">
                  {memberCount.toLocaleString()}
                </span>
              </td>
              <td>Members</td>
            </tr>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">
                  {paperCount.toLocaleString()}
                </span>
              </td>
              <td>Published Papers</td>
            </tr>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">
                  {holderCount.toLocaleString()}
                </span>
              </td>
              <td>Holders</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JournalHeader;
