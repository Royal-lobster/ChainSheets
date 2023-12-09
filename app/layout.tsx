import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./(layout)/Navbar";
import Footer from "./(layout)/Footer";
import { cn } from "./lib/cn";
import WalletProvider from "./(layout)/WalletProvider";

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
          "flex justify-center p-4 min-h-screen bg-neutral-100  text-neutral-800"
        )}
      >
        <WalletProvider>
          <div className="container flex flex-col max-w-6xl">
            <Navbar />
            <div className="flex-grow my-10">{children}</div>
            <Footer />
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
