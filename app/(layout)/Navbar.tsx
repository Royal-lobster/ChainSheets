"use client";

import React from "react";
import ChainSheetsIcon from "../icons/ChainSheetsIcon";
import { IconCirclePlus, IconWallet } from "@tabler/icons-react";
import Link from "next/link";
import { button } from "../lib/variants";
import { QRCodeSVG } from "qrcode.react";

const Navbar = () => {
  const [isQrCodeVisible, setIsQrCodeVisible] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleLogin = async () => {
    const res = await fetch("/api/sign-in");
    const data = await res.json();
    setData(data);
    console.log("sign in data", data);
    setIsQrCodeVisible(true);
  };

  return (
    <header className="flex justify-center sm:justify-between gap-4 items-center py-4">
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
        <button className={button()} onClick={handleLogin}>
          <IconWallet />
          <span className="hidden sm:inline">Connect Wallet</span>
        </button>
        {isQrCodeVisible && data && (
          <QRCodeSVG style={{ width: 512 }} value={JSON.stringify(data)} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
