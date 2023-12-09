"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import FieldWrapper from "./FieldWrapper";
import JournalAvatarUpload from "./JournalAvatarUpload";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 w-full max-w-lg mx-auto"
    >
      <FieldWrapper
        label="Journal Avatar"
        name="journalAvatar"
        register={register}
        errors={errors}
      >
        <JournalAvatarUpload name="journalAvatar" register={register} />
      </FieldWrapper>
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
        />
      </FieldWrapper>

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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Launch
      </button>
    </form>
  );
};

export default CreateNewJournal;
