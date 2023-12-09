import { Wallet } from "@ethersproject/wallet";
import { Context, ContextParams } from "@aragon/sdk-client";
import { SupportedNetwork } from "@aragon/sdk-client-common";

const minimalContextParams: ContextParams = {
    network: SupportedNetwork.MUMBAI,
    web3Providers: "https://eth.llamarpc.com",
    signer: Wallet.createRandom(),
  };

export const context = new Context(minimalContextParams);