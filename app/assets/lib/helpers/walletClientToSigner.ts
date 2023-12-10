import { Chain, WalletClient } from "viem";
import { providers } from 'ethers'

export function walletClientToSigner(walletClient: WalletClient, chain: Chain) {
  const { account, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network as any);
  const signer = provider.getSigner(account?.address);
  return signer;
}
