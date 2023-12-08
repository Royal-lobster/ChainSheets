import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./(layout)/Navbar";
import Footer from "./(layout)/Footer";
import { cn } from "./lib/cn";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

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
          ptSerif.className,
          "container max-w-6xl mx-auto p-4 flex flex-col min-h-screen"
        )}
      >
        <Navbar />
        <div className="flex-grow my-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
