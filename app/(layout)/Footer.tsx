import { IconBrain } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5 text-neutral-500 grid place-items-center gap-4">
      <IconBrain size={32} />{" "}
      <div className="font-semibold text-center">
        Team BrainDAO - ETHIndia 2023 Project
      </div>
    </footer>
  );
};

export default Footer;
