import React from "react";
import Image from "next/image";
import { button, chip } from "@/app/lib/variants";
import { IconNote, IconUsers } from "@tabler/icons-react";

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
  journalImage = "https://source.unsplash.com/random/500x500",
  journalTitle = "AI and Machine Learning",
  topic = "Artificial Intelligence",
  description = "All papers on AI and Machine learning Research",
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
            src={journalImage}
            width={JOURNAL_IMAGE_SIZE}
            height={JOURNAL_IMAGE_SIZE}
            alt="Section Icon"
          />
        </div>

        {/* Center content */}
        <div className="flex gap-1 flex-col text-center sm:text-left">
          <div className={chip()}>{topic}</div>
          <div className="font-bold text-2xl md:text-3xl mt-2">
            {journalTitle}
          </div>
          <p className="text-neutral-500 mt-1">{description}</p>
          <div className="flex justify-center mt-4 gap-4 flex-wrap">
            <button className={button()}>
              <IconUsers />
              <span>Become Member</span>
            </button>
            <button className={button({ type: "outline" })}>
              <IconNote />
              <span>Submit Paper</span>
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
