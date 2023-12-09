import Modal from "@/app/components/Modal";
import { button } from "@/app/lib/variants";
import { IconNote } from "@tabler/icons-react";
import React from "react";

const SubmitPaper = () => {
  return (
    <Modal
      trigger={
        <button className={button({ type: "outline" })}>
          <IconNote />
          <span>Submit Paper</span>
        </button>
      }
      title="Submit Paper"
    >
      <div>Hello</div>
    </Modal>
  );
};

export default SubmitPaper;
