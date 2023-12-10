import { env } from "@/app/env.mjs";
import lighthouse from "@lighthouse-web3/sdk";
import {writeFileSync} from "fs";
import { Buffer } from "buffer";

export async function uploadImageToLighthouseStorage(blob: Blob) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  writeFileSync('image.png', buffer);
  const output = await lighthouse.upload('image.png', env.LIGHTHOUSE_STORAGE_API_KEY);
  console.log(
    "🎉 Uploaded https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  );
  return output.data.Hash;
}
