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
      title={`Join ${name}`}
    >
      <div className="flex flex-col space-y-4">
        <p className="text-gray-500">
          You will be automatically eligible to vote and review on paper
          submissions if you have {topic} token.
        </p>
      </div>
    </Modal>
  );
};

export default JoinJournal;
