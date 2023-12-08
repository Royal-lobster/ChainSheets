import React from "react";
import ChainSheetsIcon from "./ChainSheetsIcon";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <ChainSheetsIcon className="w-8 h-8" />
        <span className="text-2xl font-bold">ChainSheet</span>
      </div>
    </div>
  );
};

export default Navbar;
