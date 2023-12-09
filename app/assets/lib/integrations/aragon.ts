import { Wallet } from "@ethersproject/wallet";
import { Context, ContextParams } from "@aragon/sdk-client";
import { SupportedNetwork } from "@aragon/sdk-client-common";
import { env } from "@/app/env.mjs";


const minimalContextParams: ContextParams = {
    network: SupportedNetwork.MUMBAI,
    web3Providers: "https://rpc.ankr.com/polygon_mumbai",
    signer: new Wallet("0x" + env.NEXT_PUBLIC_WALLET_PRIVATE_KEY),
  };

export const context = new Context(minimalContextParams);