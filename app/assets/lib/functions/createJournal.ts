import {
  Client,
  CreateDaoParams,
  DaoCreationSteps,
  DaoMetadata,
  TokenVotingClient,
  TokenVotingPluginInstall,
} from "@aragon/sdk-client";
import { env } from "@/app/env.mjs";
import { SupportedNetwork } from "@aragon/sdk-client-common";
import { getAragonContext } from "../integrations/aragon";
import { Journal } from "@/app/(home)/CreateJournal";


export const createJournal = async ({
  name,
  description,
  image,
  topic,
  participationThreshold,
  minimumApprovalPercentage,
}: Journal) => {
  const client: Client = new Client(await getAragonContext());

  const tokenVotingPluginInstallParams: TokenVotingPluginInstall = {
    votingSettings: {
      minDuration: 60 * 60 * 24 * 2,
      minParticipation: participationThreshold/100,
      supportThreshold: minimumApprovalPercentage/100,
    },
    useToken: {
      tokenAddress: env.NEXT_PUBLIC_EXPERT_SHEET_TOKEN_ADDRESS,
      wrappedToken: {
        name: "ExpertToken",
        symbol: "ESHT",
      },
    },
  };

  const tokenVotingPluginInstallItem =
    TokenVotingClient.encoding.getPluginInstallItem(
      tokenVotingPluginInstallParams,
        SupportedNetwork.MUMBAI
    );

  const daoMetadata: DaoMetadata = {
    name,
    description,
    avatar: image,
    links: [
      {
        name: "topic",
        url: topic,
      },
    ],
  };

  // Pins the DAO's metadata in IPFS to get back the URI.
  const metadataUri: string = await client.methods.pinMetadata(daoMetadata);
  const createParams: CreateDaoParams = {
    metadataUri,
    plugins: [tokenVotingPluginInstallItem],
  };

  const steps = client.methods.createDao(createParams);

  for await (const step of steps) {
    try {
      switch (step.key) {
        case DaoCreationSteps.CREATING:
          console.log("⏳ Journal Deploying: ", { txHash: step.txHash });
          break;
        case DaoCreationSteps.DONE:
          const result = {
            daoAddress: step.address,
            pluginAddresses: step.pluginAddresses,
          };
          console.log("🚀 Journal Deployed: ", result);
          return result;
      }
    } catch (err) {
      console.error(err);
    }
  }
};
