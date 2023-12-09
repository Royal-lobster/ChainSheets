import { Context, ContextParams } from "@aragon/sdk-client";
import { SupportedNetwork } from "@aragon/sdk-client-common";
import { getWalletClient } from "wagmi/actions";
import { walletClientToSigner } from "../helpers/walletClientToSigner";
import { polygonMumbai } from "viem/chains";

export const getAragonContext = async () => {
  const walletClient = await getWalletClient();

  if (!walletClient) {
    throw new Error("No wallet client");
  }

  const minimalContextParams: ContextParams = {
    network: SupportedNetwork.MUMBAI,
    web3Providers: "https://rpc.ankr.com/polygon_mumbai",
    signer: walletClientToSigner(walletClient, polygonMumbai),
  };

  return new Context(minimalContextParams);
};
