import { IconPhotoPlus } from "@tabler/icons-react";
import { UseFormRegister } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../lib/cn";

type JournalAvatarUploadProps = {
  register: UseFormRegister<any>;
  name: string;
};

const IMAGE_DIMENSIONS = 160;

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
    <div
      className={cn(
        "grid place-content-center rounded overflow-hidden",
        image ? "bg-transparent" : "bg-neutral-900"
      )}
      style={{
        width: IMAGE_DIMENSIONS,
        height: IMAGE_DIMENSIONS,
      }}
    >
      <label
        htmlFor="avatar-upload"
        style={{
          width: IMAGE_DIMENSIONS,
          height: IMAGE_DIMENSIONS,
        }}
        className="grid place-content-center"
      >
        {!image && (
          <IconPhotoPlus className="text-neutral-200 cursor-pointer" />
        )}
        {image && (
          <Image
            src={image}
            alt="Avatar"
            width={IMAGE_DIMENSIONS}
            height={IMAGE_DIMENSIONS}
            className="object-cover"
            style={{ width: IMAGE_DIMENSIONS, height: IMAGE_DIMENSIONS }}
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
