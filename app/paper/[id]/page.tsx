import React from "react";
import PaperHeader from "./PaperHeader";
import PaperReviews from "./PaperReviews";

const PaperPage = () => {
  return (
    <main className="flex flex-col gap-10">
      <PaperHeader />
      <PaperReviews />
    </main>
  );
};

export default PaperPage;
