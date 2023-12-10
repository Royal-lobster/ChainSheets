import { IconNorthStar } from "@tabler/icons-react";
import React from "react";

const Empty = ({
  title = "You are too early here",
  description = "Lets start creating some exciting stuff here 🚀",
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex text-2xl items-center space-x-2">
        <IconNorthStar className="w-6 h-6" />
        <div>{title}</div>
      </div>
      <div className="text-lg text-neutral-500">{description}</div>
    </div>
  );
};

export default Empty;
