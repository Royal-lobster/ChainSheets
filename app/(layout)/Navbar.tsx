import React from "react";
import ChainSheetsIcon from "../icons/ChainSheetsIcon";
import { IconCirclePlus, IconWallet } from "@tabler/icons-react";
import Link from "next/link";
import { button } from "../lib/variants";

const Navbar = () => {
  return (
    <header className="flex justify-center sm:justify-between gap-4 items-center py-4 flex-wrap">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <span className="cursor-pointer flex gap-2 items-center">
            <ChainSheetsIcon className="w-8 h-8" />
            <span className="text-2xl font-bold">ChainSheet</span>
          </span>
        </Link>
      </div>
      <div className="flex gap-8">
        <nav className="flex gap-4 items-center">
          <Link href="/#create-journal" className={button({ type: "link" })}>
            <IconCirclePlus />
            <span>Create new Journal</span>
          </Link>
        </nav>
        <button className={button()}>
          <IconWallet />
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;
