"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const JournalMetadataSchema = z.object({
  journalName: z.string(),
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
  });

  const onSubmit = (data) => {
    console.log(data); // You can handle the form submission here
  };

  // Our form with React Hook Form
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 w-full max-w-lg mx-auto"
    >
      <div className="mb-2">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Journal Avatar:
        </label>
        <input
          {...register("journalAvatar")}
          type="file"
          className="border w-full p-2 rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Journal Name:
        </label>
        <input
          {...register("journalName")}
          placeholder="Name of Journal"
          className="border w-full p-2 rounded"
        />
        <p className="text-xs text-red-500 mt-1">
          {errors.journalName?.message?.toString()}
        </p>
      </div>

      <div className="mb-2">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Description:
        </label>
        <textarea
          {...register("description")}
          placeholder="Enter about your journal"
          className="border w-full p-2 rounded"
        />
        <p className="text-xs text-red-500 mt-1">
          {errors.description?.message?.toString()}
        </p>
      </div>

      <div className="mb-2">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Topics:
        </label>
        <Controller
          control={control}
          name="topics"
          render={({ field }) => (
            <select {...field} className="border w-full p-2 rounded">
              {/* Replace these options with actual topic choices */}
              <option value="topic1">Topic 1</option>
              <option value="topic2">Topic 2</option>
              <option value="topic3">Topic 3</option>
            </select>
          )}
        />
        <p className="text-xs text-red-500 mt-1">
          {errors.topics?.message?.toString()}
        </p>
      </div>

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
