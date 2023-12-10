import React from "react";
import JournalHeader from "./JournalHeader";
import PublishedPapers from "./PublishedPapers";
import UnderReviewPapers from "./UnderReviewPapers";

const JournalPage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex flex-col gap-10">
      <JournalHeader id={params.id} />
      <PublishedPapers />
      <UnderReviewPapers />
    </main>
  );
};

export default JournalPage;
