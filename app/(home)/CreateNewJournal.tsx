"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import FieldWrapper from "./FieldWrapper";
import JournalAvatarUpload from "./JournalAvatarUpload";
import Section from "../(layout)/Section";

const DEFAULT_PARTICIPATION_THRESHOLD = 50;
const DEFAULT_MINIMUM_EXPERT_TOKENS = 50;
const DEFAULT_MINIMUM_APPROVAL_PERCENTAGE = 500;

const JournalMetadataSchema = z.object({
  journalName: z.string(),
  journalAvatar: z.string(),
  description: z.string(),
  topics: z.array(z.string()),
  participationThreshold: z.number(),
  minimumExpertTokens: z.number(),
  minimumApprovalPercentage: z.number(),
});

const CreateNewJournal = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JournalMetadataSchema),
    defaultValues: {
      journalName: "",
      journalAvatar: "",
      description: "",
      topics: [],
      participationThreshold: DEFAULT_PARTICIPATION_THRESHOLD,
      minimumExpertTokens: DEFAULT_MINIMUM_EXPERT_TOKENS,
      minimumApprovalPercentage: DEFAULT_MINIMUM_APPROVAL_PERCENTAGE,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data); // You can handle the form submission here
  };

  return (
    <div className="xl:-mx-20 px-20 py-10 bg-black text-white rounded-lg">
      <Section title="Establish your own decentralized journal">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <FieldWrapper
              label="Journal Avatar"
              name="journalAvatar"
              register={register}
              errors={errors}
            >
              <JournalAvatarUpload name="journalAvatar" register={register} />
            </FieldWrapper>
            <div className="flex-grow">
              <FieldWrapper
                label="Journal Name"
                name="journalName"
                register={register}
                errors={errors}
                placeholder="Name of Journal"
              />

              <FieldWrapper
                label="Description"
                name="description"
                register={register}
                errors={errors}
                placeholder="Enter about your journal"
              >
                <textarea
                  {...register("description")}
                  placeholder="Enter about your journal"
                  className="border w-full p-2 rounded"
                  rows={4}
                />
              </FieldWrapper>
            </div>

            <div className="flex-grow">
              <FieldWrapper
                label="Minimum Expert Tokens"
                name="minimumExpertTokens"
                register={register}
                errors={errors}
                type="number"
              />

              <FieldWrapper
                label="Participation Threshold"
                name="participationThreshold"
                register={register}
                errors={errors}
                type="range"
              />

              <FieldWrapper
                label="Minimum Approval Percentage"
                name="minimumApprovalPercentage"
                register={register}
                errors={errors}
                type="range"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-transparent border border-neutral-700 mt-4 mx-auto block text-white font-bold py-2 px-4 rounded"
          >
            🚀 Launch
          </button>
        </form>
      </Section>
    </div>
  );
};

export default CreateNewJournal;
