import { shortenAddress } from "@/app/assets/lib/helpers/shortenAddress";
import { IconCalendar, IconUser } from "@tabler/icons-react";
import React from "react";

type ReviewCardProps = {
  title: string;
  description: string;
  createdAt: string;
  author: string;
};

const ReviewCard = ({
  title,
  description,
  createdAt,
  author,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex gap-2 text-neutral-500">
        <IconUser />
        {shortenAddress(author)}
      </div>
      <div className="flex gap-2 text-neutral-500">
        <IconCalendar />
        {createdAt}
      </div>
    </div>
  );
};

export default ReviewCard;
