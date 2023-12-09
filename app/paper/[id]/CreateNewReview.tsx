"use client";
import FieldWrapper from "@/app/components/FieldWrapper";
import Modal from "@/app/components/Modal";
import { button } from "@/app/lib/variants";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconFileCheck } from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ReviewSchema = z.object({
  title: z.string(),
  description: z.string(),
});
type Review = z.infer<typeof ReviewSchema>;

const CreateReview = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Review>({
    resolver: zodResolver(ReviewSchema),
  });

  const onSubmit = (data: Review) => {
    console.log(data); // You can handle the form submission here
  };

  return (
    <Modal
      title="Create Review"
      trigger={
        <button className={button({ type: "outline" })}>
          <IconFileCheck /> Submit Review
        </button>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper
          label="Title"
          name="title"
          placeholder="Title"
          register={register}
          errors={errors}
        />
        <FieldWrapper
          label="Description"
          name="description"
          placeholder="Description"
          register={register}
          errors={errors}
          type="textarea"
        />
        <button type="submit" className={button({ class: "w-full mt-4" })}>
          Submit Review
        </button>
      </form>
    </Modal>
  );
};

export default CreateReview;
