import {
  getComplementaryColor,
  getRandomPaleColor,
} from "@/app/assets/lib/helpers/randomColors";
import { uploadImageToLighthouseStorage } from "@/app/assets/lib/integrations/lighthouse.storage";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const urlSearchParams = new URLSearchParams(req.nextUrl.searchParams);
  const title = urlSearchParams.get("title");
  const description = urlSearchParams.get("description");
  const backgroundColor = getRandomPaleColor();
  const titleColor = getComplementaryColor(backgroundColor);
  const descriptionColor = getComplementaryColor(backgroundColor);

  const generatedImage = new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor,
          width: 1200,
          height: 630,
        }}
      >
        <h1
          style={{ fontSize: "84px", fontWeight: "bolder", color: titleColor }}
        >
          {title}
        </h1>
        <p style={{ fontSize: "36px", color: descriptionColor }}>
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );

  const ipfs = await uploadImageToLighthouseStorage(
    await generatedImage.blob()
  );

  return NextResponse.json({ ipfs });
}
