"use client";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, createConfig } from "wagmi";
import { env } from "@/app/env.mjs";

const config = createConfig(
  getDefaultConfig({
    infuraId: env.NEXT_PUBLIC_INFURA_ID,
    walletConnectProjectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    appName: "ChainSheet",
    appDescription: "A decentralized academic publishing framework",
    appUrl: "chainsheets.vercel.app",
    appIcon:
      "https://bafkreidu4sosagd245txe37o273eh6lz5dyxeud5jpgges7ljrohzjbeq4.ipfs.nftstorage.link",
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
