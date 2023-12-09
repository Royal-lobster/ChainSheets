"use client";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, createConfig } from "wagmi";
import { env } from "@/app/env.mjs";

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    appName: "ChainSheet",
    appDescription: "Your App Description",
    appUrl: "chainsheets.vercel.app", // your app's url
    appIcon: "", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

type WalletProviderProps = {
  children: React.ReactNode;
};

const WalletProvider = ({ children }: WalletProviderProps) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
