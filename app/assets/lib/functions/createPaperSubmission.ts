import {
  CreateMajorityVotingProposalParams,
  ProposalCreationSteps,
  TokenVotingClient,
  VoteValues,
} from "@aragon/sdk-client";
import { ProposalMetadata } from "@aragon/sdk-client-common";
import { env } from "@/app/env.mjs";
import { SupportedNetwork } from "@aragon/sdk-client-common";
import { getAragonContext } from "../integrations/aragon";
