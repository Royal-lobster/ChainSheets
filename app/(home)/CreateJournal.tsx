"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import FieldWrapper from "../assets/components/FieldWrapper";
import JournalAvatarUpload from "./JournalAvatarUpload";
import Section from "../(layout)/Section";
import { IconBuildingArch, IconRocket } from "@tabler/icons-react";
import { button } from "../assets/lib/helpers/variants";
import { topics } from "@/app/assets/data/topics";

const DEFAULT_PARTICIPATION_THRESHOLD = 50;
const DEFAULT_MINIMUM_EXPERT_TOKENS = 50;
const DEFAULT_MINIMUM_APPROVAL_PERCENTAGE = 30;

const journalSchema = z.object({
  journalName: z.string(),
  journalAvatar: z.string(),
  description: z.string(),
  topics: z.string(),
  participationThreshold: z.number(),
  minimumExpertTokens: z.number(),
  minimumApprovalPercentage: z.number(),
});
type Journal = z.infer<typeof journalSchema>;

const CreateJournal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(journalSchema),
    defaultValues: {
      journalName: "",
      journalAvatar: "",
      description: "",
      topics: topics[0],
      participationThreshold: DEFAULT_PARTICIPATION_THRESHOLD,
      minimumExpertTokens: DEFAULT_MINIMUM_EXPERT_TOKENS,
      minimumApprovalPercentage: DEFAULT_MINIMUM_APPROVAL_PERCENTAGE,
    },
  });

  const onSubmit = (data: Journal) => {
    console.log(data); // You can handle the form submission here
  };

  return (
    <div
      id="create-journal"
      className="-mx-4 sm:mx-0 xl:-mx-16 px-8 xl:px-24 py-24 bg-neutral-900 text-white sm:rounded-lg scroll-mt-14"
    >
      <Section
        title="Establish your own decentralized journal"
        icon={<IconBuildingArch size={32} />}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <FieldWrapper
              label="Journal Avatar"
              name="journalAvatar"
              register={register}
              errors={errors}
              isOnDark
            >
              <JournalAvatarUpload name="journalAvatar" register={register} />
            </FieldWrapper>
            <div className="flex-grow space-y-4">
              <FieldWrapper
                label="Journal Name"
                name="journalName"
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
                label="Topics"
                name="topics"
                register={register}
                errors={errors}
                placeholder="Enter topics"
                isOnDark
              >
                <select
                  {...register("topics")}
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
                label="Minimum Expert Tokens"
                name="minimumExpertTokens"
                register={register}
                errors={errors}
                type="number"
                isOnDark
              />

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
          <button
            type="submit"
            className={button({
              type: "lightOutline",
              class: "px-10 mt-10 mx-auto",
            })}
          >
            <IconRocket /> <span>Launch</span>
          </button>
        </form>
      </Section>
    </div>
  );
};

export default CreateJournal;
