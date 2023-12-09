import React from "react";
import Image from "next/image";

const JournalHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center sm:justify-between items-center">
      <div className="flex gap-8 justify-center sm:justify-between items-center flex-wrap">
        {/* Left side image / icon */}
        <div className="flex-shrink-0">
          <Image
            className="h-48 w-48 rounded"
            src="https://source.unsplash.com/random/500x500"
            width={180}
            height={180}
            alt="Section Icon"
          />
        </div>

        {/* Center content */}
        <div className="flex gap-1 flex-col text-center sm:text-left">
          <div className="w-max px-1.5 p-0.5 text-sm rounded-full bg-neutral-200 text-neutral-500">
            Artificial Intelligence
          </div>
          <div className="font-bold text-2xl md:text-3xl mt-2">
            AI and Machine Learning
          </div>
          <p className="text-gray-600 text-sm mt-1">
            All papers on AI and Machine learning Research
          </p>
          <div className="flex mt-4 space-x-4 flex-wrap">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              Become Member
            </button>
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black rounded">
              Submit Paper
            </button>
          </div>
        </div>
      </div>

      {/* Right side stats */}
      <div className="flex flex-col mt-10 sm:mt-0 items-center sm:items-start">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">1000</span>
              </td>
              <td>Members</td>
            </tr>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">120</span>
              </td>
              <td>Published Papers</td>
            </tr>
            <tr>
              <td className="text-right pr-3">
                <span className="text-2xl sm:text-3xl font-bold">1.4k</span>
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
