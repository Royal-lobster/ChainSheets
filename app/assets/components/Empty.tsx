import { IconNorthStar } from "@tabler/icons-react";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center space-x-2">
        <IconNorthStar className="w-6 h-6" />
        <div>You are too early here!</div>
      </div>
      <div>Lets start creating some exciting stuff here 🚀</div>
    </div>
  );
};

export default Empty;
