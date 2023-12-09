import { IconPhotoPlus } from "@tabler/icons-react";
import { UseFormRegister } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";

type JournalAvatarUploadProps = {
  register: UseFormRegister<any>;
  name: string;
};

const JournalAvatarUpload = ({ register, name }: JournalAvatarUploadProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid place-content-center w-24 h-24 rounded overflow-hidden">
      <label htmlFor="avatar-upload">
        {!image && (
          <IconPhotoPlus className="text-neutral-200 cursor-pointer" />
        )}
        {image && (
          <Image
            src={image}
            alt="Avatar"
            width={96}
            height={96}
            className="w-24 h-24 object-cover"
          />
        )}
      </label>
      <input
        id="avatar-upload"
        {...register(name)}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default JournalAvatarUpload;
