import {
  Client,
  CreateDaoParams,
  DaoCreationSteps,
  DaoMetadata,
  TokenVotingClient,
  TokenVotingPluginInstall,
} from "@aragon/sdk-client";
import { GasFeeEstimation } from "@aragon/sdk-client-common";
import { env } from "@/app/env.mjs";
import { context } from "../integrations/aragon";

type CreateJournalArgs = {
  name: string;
  description: string;
  image: string;
  topic: string;
  minimumExpertTokens: number;
  participationThreshold: number;
  minimumApprovalPercentage: number;
};

export const createJournal = async ({
  name,
  description,
  image,
  topic,
  minimumExpertTokens,
  participationThreshold,
  minimumApprovalPercentage,
}: CreateJournalArgs) => {
  const client: Client = new Client(context);

  const tokenVotingPluginInstallParams: TokenVotingPluginInstall = {
    votingSettings: {
      minDuration: 60 * 60 * 24 * 2,
      minParticipation: participationThreshold,
      supportThreshold: minimumApprovalPercentage,
    },
    useToken: {
      tokenAddress: env.NEXT_PUBLIC_EXPERT_SHEET_TOKEN_ADDRESS,
      wrappedToken: {
        name: "ExpertSHEET",
        symbol: "ESHT",
      },
    },
  };

  const tokenVotingPluginInstallItem =
    TokenVotingClient.encoding.getPluginInstallItem(
      tokenVotingPluginInstallParams,
      "goerli"
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
      {
        name: "minimumExpertTokens",
        url: minimumExpertTokens.toString(),
      }
    ],
  };

  // Pins the DAO's metadata in IPFS to get back the URI.
  const metadataUri: string = await client.methods.pinMetadata(daoMetadata);
  const createParams: CreateDaoParams = {
    metadataUri,
    plugins: [tokenVotingPluginInstallItem],
  };

  const estimatedGas: GasFeeEstimation = await client.estimation.createDao(
    createParams
  );
  console.log("⛽ Gas Insights: ", { avg: estimatedGas.average, max: estimatedGas.max });

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
