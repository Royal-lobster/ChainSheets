import { IconPhotoPlus } from "@tabler/icons-react";
import React from "react";

const JournalAvatarUpload = () => {
  return (
    <label
      htmlFor="avatar-upload"
      className="grid place-content-center bg-black w-24 h-24 p-2 rounded"
    >
      <IconPhotoPlus className="text-neutral-200" />
      <input id="avatar-upload" type="file" className="hidden" />
    </label>
  );
};

export default JournalAvatarUpload;
