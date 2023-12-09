"use client";
import Modal from "@/app/components/Modal";
import { button } from "@/app/lib/variants";
import { IconNote } from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FieldWrapper from "@/app/components/FieldWrapper";

const submitPaperSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  pdf: z
    .any()
    .refine((files) => !!files[0], "PDF is required.")
    .refine(
      (files) => files[0]?.type === "application/pdf",
      "File must be a PDF."
    ),
});

type SubmitPaperFormValues = z.infer<typeof submitPaperSchema>;

const SubmitPaper = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitPaperFormValues>({
    resolver: zodResolver(submitPaperSchema),
  });

  const onSubmit = (data: SubmitPaperFormValues) => {
    console.log(data); // You can handle the form submission here
  };

  return (
    <Modal
      trigger={
        <button className={button({ type: "outline" })}>
          <IconNote />
          <span>Submit Paper</span>
        </button>
      }
      title="Submit Paper"
      description="Submit a paper to this journal. Your paper will be peer reviewed by other experts from this journal. Make sure your paper must be the subject of this journal."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldWrapper
            label="Name"
            name="name"
            placeholder="Paper Name"
            register={register}
            errors={errors}
          />
          <FieldWrapper
            label="Upload Paper (PDF)"
            name="pdf"
            register={register}
            errors={errors}
            type="file"
          />
          <FieldWrapper
            label="Description"
            name="description"
            placeholder="Paper Description"
            register={register}
            errors={errors}
          >
            <textarea
              {...register("description")}
              placeholder="Paper Description"
              className="block border w-full p-2 rounded text-black"
            />
          </FieldWrapper>
        </div>
        <button type="submit" className={button({ class: "mt-10 w-full" })}>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default SubmitPaper;
