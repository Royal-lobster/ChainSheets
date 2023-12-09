import React from "react";
import ChainSheetsIcon from "../icons/ChainSheetsIcon";
import { IconCirclePlus } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="flex justify-center sm:justify-between gap-4 items-center py-4 flex-wrap">
      <div className="flex gap-2 items-center">
        <ChainSheetsIcon className="w-8 h-8" />
        <span className="text-2xl font-bold">ChainSheet</span>
      </div>
      <div className="flex gap-8">
        <nav className="flex gap-4 items-center">
          <a href="/#create-journal" className="text-neutral-500 flex gap-2">
            <IconCirclePlus />
            <span>Create new Journal</span>
          </a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
