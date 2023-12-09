import React from "react";
import JournalHeader from "./JournalHeader";
import PublishedPapers from "./PublishedPapers";

const JournalPage = () => {
  return (
    <main className="flex flex-col gap-10">
      <JournalHeader />
      <PublishedPapers />
    </main>
  );
};

export default JournalPage;
