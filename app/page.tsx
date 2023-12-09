import PopularJournals from "./(home)/PopularJournals";
import PopularPapers from "./(home)/PopularPapers";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <PopularJournals />
      <PopularPapers />
    </main>
  );
}
