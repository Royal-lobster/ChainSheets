import React from "react";
import JournalHeader from "./JournalHeader";
import PublishedPapers from "./PublishedPapers";
import UnderReviewPapers from "./UnderReviewPapers";

const JournalPage = () => {
  return (
    <main className="flex flex-col gap-10">
      <JournalHeader />
      <PublishedPapers />
      <UnderReviewPapers />
    </main>
  );
};

export default JournalPage;
