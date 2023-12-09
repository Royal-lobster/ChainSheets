import { env } from "@/app/env.mjs";
import axios from "axios";

export async function uploadToLighthouseStorage(blob: Blob) {
    const formData = new FormData();
    formData.append("file", blob);
  
    const response = await axios.post(
      "https://api.lighthouse.storage/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${env.LIGHTHOUSE_STORAGE_API_KEY}`,
        },
      }
    );
  
    return response.data.value.ipfs;
  }
  