import { shortenAddress } from "@/app/lib/shortenAddress";
import { button, chip } from "@/app/lib/variants";
import { IconFile, IconFileCheck, IconUser } from "@tabler/icons-react";
import React from "react";
import { z } from "zod";

export const paperStatus = z.enum(["draft", "accepted", "rejected"]);
export type PaperStatus = z.infer<typeof paperStatus>;

type PaperHeaderProps = {
  status?: PaperStatus;
  title?: string;
  description?: string;
  author?: string;
};

const PaperHeader = ({
  status = paperStatus.enum.draft,
  title = "Blockchain vulnerability detection with LLMs",
  description = "The paper evaluates the use of Large Language Models (LLMs) in identifying and preempting security vulnerabilities in blockchain systems, comparing their effectiveness with traditional security methods.",
  author = "0x1dfC530A9B3955d62D16359110E3cf385d47b1a9",
}: PaperHeaderProps) => {
  return (
    <section className="flex">
      {/* Left Section */}
      <div className="flex flex-col gap-2">
        <div
          className={chip({
            type: paperStatus.enum.draft
              ? "warning"
              : paperStatus.enum.rejected
              ? "danger"
              : "success",
          })}
        >
          {paperStatus.enum.draft
            ? "Paper Under Review"
            : paperStatus.enum.rejected
            ? "Paper Rejected"
            : "Paper Published"}
        </div>
        <h1 className="sm:text-2xl text-3xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
        <div className="flex gap-2 text-neutral-500">
          <IconUser />
          {shortenAddress(author)}
        </div>
        <div className="flex gap-2 mt-4">
          <button className={button()}>
            <IconFile />
            View {paperStatus.enum.draft ? "Draft" : "Paper"}
          </button>
          <button className={button({ type: "outline" })}>
            <IconFileCheck /> Submit Review
          </button>
        </div>
      </div>

      {/* Right Section */}
    </section>
  );
};

export default PaperHeader;
