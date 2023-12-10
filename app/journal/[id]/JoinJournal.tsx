import Modal from "@/app/assets/components/Modal";
import { button } from "@/app/assets/lib/helpers/variants";
import { IconUsers } from "@tabler/icons-react";
import React from "react";

type JoinJournalProps = {
  name: string;
  topic: string;
};

const JoinJournal = ({ name, topic }: JoinJournalProps) => {
  return (
    <Modal
      trigger={
        <button className={button()}>
          <IconUsers />
          <span>Become Member</span>
        </button>
      }
      description="Be part of the review board and vote on paper submissions"
      title={`Join ${name}`}
    >
      You will be automatically eligible to vote and review on paper submissions
      if you have {topic} token.
    </Modal>
  );
};

export default JoinJournal;
