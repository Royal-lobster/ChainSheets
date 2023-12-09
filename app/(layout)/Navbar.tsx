"use client";
import { IconCirclePlus } from "@tabler/icons-react";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import ChainSheetsIcon from "../assets/icons/ChainSheetsIcon";
import { button } from "../assets/lib/helpers/variants";

const Navbar = () => {
  return (
    <header className="flex justify-between sm:justify-between gap-4 items-center py-4">
      <div className="flex gap-2 items-center">
        <Link href="/" className="cursor-pointer flex gap-2 items-center">
          <ChainSheetsIcon className="w-8 h-8" />
          <span className="text-xl sm:text-2xl font-bold">ChainSheet</span>
        </Link>
      </div>
      <nav className="flex sm:gap-4 items-center">
        <Link href="/#create-journal" className={button({ type: "link" })}>
          <IconCirclePlus />
          <span className="hidden sm:inline">Create new Journal</span>
        </Link>
        <ConnectKitButton />
      </nav>
    </header>
  );
};

export default Navbar;
