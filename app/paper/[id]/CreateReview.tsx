"use client";
import FieldWrapper from "@/app/assets/components/FieldWrapper";
import Modal from "@/app/assets/components/Modal";
import { button } from "@/app/assets/lib/helpers/variants";
import { saveToReview } from "@/app/assets/server/saveToReview";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconFileCheck, IconLoader } from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { z } from "zod";

const reviewSchema = z.object({
  title: z.string(),
  description: z.string(),
});
type Review = z.infer<typeof reviewSchema>;

type CreateReviewProps = {
  saveToReview: typeof saveToReview;
  author: string;
};

const CreateReview = ({ saveToReview, author }: CreateReviewProps) => {
  const [loading, setLoading] = React.useState(false);
  const { address } = useAccount();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Review>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: Review) => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <Modal
      title="Create Review"
      description="Submit a review to this paper. Make sure your review must be the subject of this paper. and you are up to date with the latest revision."
      trigger={
        <button
          className={button({ type: "outline" })}
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        >
          {loading ? (
            <>
              <IconLoader className="animate-spin mr-2" /> Submitting...
            </>
          ) : (
            <>
              <IconFileCheck /> Submit Review
            </>
          )}
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
