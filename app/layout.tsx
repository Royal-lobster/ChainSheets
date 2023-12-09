import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./(layout)/Navbar";
import Footer from "./(layout)/Footer";
import { cn } from "./lib/cn";

const font = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "ChainSheet",
  description:
    "Collaborative DAO Network for Publishing Research & Paper Access",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          font.className,
          "container max-w-6xl mx-auto p-4 flex flex-col min-h-screen bg-neutral-100 text-neutral-800"
        )}
      >
        <Navbar />
        <div className="flex-grow my-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
