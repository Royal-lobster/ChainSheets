import { env } from "@/app/env.mjs";
import lighthouse from "@lighthouse-web3/sdk";

export async function uploadImageToLighthouseStorage(blob: Blob) {
  const file = new File([blob], "image.png", { type: blob.type });
  const output = await lighthouse.upload(file, env.LIGHTHOUSE_STORAGE_API_KEY);
  console.log(
    "🎉 Uploaded https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  );
  return output.data.Hash;
}
