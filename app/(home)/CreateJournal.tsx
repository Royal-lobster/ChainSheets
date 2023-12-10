"use client";

import { topics } from "@/app/assets/data/topics";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBuildingArch, IconLoader, IconRocket } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Section from "../(layout)/Section";
import FieldWrapper from "../assets/components/FieldWrapper";
import { createJournal } from "../assets/lib/functions/createJournal";
import { button } from "../assets/lib/helpers/variants";
import JournalAvatarUpload from "./JournalAvatarUpload";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { createJournalOnDB } from "../assets/server/createJournalOnDB";

const DEFAULT_PARTICIPATION_THRESHOLD = 50;
const DEFAULT_MINIMUM_APPROVAL_PERCENTAGE = 30;

const journalSchema = z.object({
  name: z.string().min(3).max(120),
  image: z.string(),
  description: z.string().min(10).max(240),
  topic: z.string(),
  participationThreshold: z.number(),
  minimumApprovalPercentage: z.number(),
});
export type Journal = z.infer<typeof journalSchema>;

const CreateJournal = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const { isConnected } = useAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(journalSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      topic: topics[0],
      participationThreshold: DEFAULT_PARTICIPATION_THRESHOLD,
      minimumApprovalPercentage: DEFAULT_MINIMUM_APPROVAL_PERCENTAGE,
    },
  });

  const onSubmit = async (data: Journal) => {
    try {
      setIsPending(true);
      const { daoAddress } = (await createJournal(data)) || {};
      if (!daoAddress) throw new Error("DAO address not found");
      createJournalOnDB({
        daoAddress,
        title: data.name,
        description: data.description,
        topic: data.topic,
        ipfsImage: data.image,
      });
      router.push(`/journal/${daoAddress}`);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div
      id="create-journal"
      className="-mx-4 sm:mx-0 xl:-mx-16 px-8 xl:px-24 py-24 text-white sm:rounded-lg scroll-mt-14 bg-neutral-900"
    >
      <Section
        title="Establish your own decentralized journal"
        icon={<IconBuildingArch size={32} />}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <FieldWrapper
              label="Journal Avatar"
              name="image"
              register={register}
              errors={errors}
              isOnDark
            >
              <JournalAvatarUpload name="journalAvatar" register={register} />
            </FieldWrapper>
            <div className="flex-grow space-y-4">
              <FieldWrapper
                label="Journal Name"
                name="name"
                register={register}
                errors={errors}
                placeholder="Name of Journal"
                isOnDark
              />

              <FieldWrapper
                label="Description"
                name="description"
                register={register}
                errors={errors}
                placeholder="Enter about your journal"
                isOnDark
              >
                <textarea
                  {...register("description")}
                  placeholder="Enter about your journal"
                  className="border w-full p-2 rounded text-black"
                />
              </FieldWrapper>

              <FieldWrapper
                label="Topic"
                name="topic"
                register={register}
                errors={errors}
                placeholder="Enter topic for your journal"
                isOnDark
              >
                <select
                  {...register("topic")}
                  className="border w-full p-2 rounded text-black"
                  placeholder="Select topics for your journal"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </FieldWrapper>
            </div>

            <div className="flex-grow space-y-4">
              <FieldWrapper
                label="Participation Threshold"
                name="participationThreshold"
                register={register}
                errors={errors}
                type="range"
                defaultValue="50"
                isOnDark
              />

              <FieldWrapper
                label="Minimum Approval Percentage"
                name="minimumApprovalPercentage"
                register={register}
                errors={errors}
                type="range"
                defaultValue="30"
                isOnDark
              />
            </div>
          </div>
          {isConnected && (
            <button
              type="submit"
              className={button({
                class: "px-10 mt-10 mx-auto bg-neutral-700 rounded-xl",
              })}
            >
              {isPending ? (
                <IconLoader className="animate-spin" />
              ) : (
                <IconRocket />
              )}

              <span>{isPending ? "Creating..." : "Launch"}</span>
            </button>
          )}
        </form>
        {!isConnected && (
          <div className="grid place-items-center mt-4">
            <ConnectKitButton />
          </div>
        )}
      </Section>
    </div>
  );
};

export default CreateJournal;
