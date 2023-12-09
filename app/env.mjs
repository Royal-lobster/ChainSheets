import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',
  server: {
    LIGHTHOUSE_STORAGE_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string(),
    NEXT_PUBLIC_EXPERT_SHEET_TOKEN_ADDRESS: z.string(),
    NEXT_PUBLIC_WALLET_PRIVATE_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    NEXT_PUBLIC_EXPERT_SHEET_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_EXPERT_SHEET_TOKEN_ADDRESS,
    NEXT_PUBLIC_WALLET_PRIVATE_KEY: process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY,
    LIGHTHOUSE_STORAGE_API_KEY: process.env.NFT_STORAGE_API_KEY,
  },
})
