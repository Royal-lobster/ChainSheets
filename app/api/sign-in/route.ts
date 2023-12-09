import { NextRequest, NextResponse } from "next/server";
import { auth, resolver, protocol } from "@iden3/js-iden3-auth";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const requestMap = new Map();

export async function GET(req: NextRequest) {
  // const hostUrl = "<NGROK_URL>";
  const hostUrl = "https://x9m4xw6z-3000.inc1.devtunnels.ms/";
  const sessionId = 1;
  const callbackURL = "/api/callback";
  const audience =
    "did:polygonid:polygon:mumbai:2qDyy1kEo2AYcP3RT4XGea7BtxsY285szg6yP9SPrs";

  const uri = `${hostUrl}${callbackURL}?sessionId=${sessionId}`;

  // Generate request for basic authentication
  const request = auth.createAuthorizationRequest("test flow", audience, uri);

  request.id = "7f38a193-0918-4a48-9fac-36adfdb8b542";
  request.thid = "7f38a193-0918-4a48-9fac-36adfdb8b542";

  // // Add request for a specific proof
  // const proofRequest = {
  //   id: 1,
  //   circuitId: "credentialAtomicQuerySigV2",
  //   query: {
  //     allowedIssuers: ["*"],
  //     type: "KYCAgeCredential",
  //     context:
  //       "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
  //     credentialSubject: {
  //       birthday: {
  //         $lt: 20000101,
  //       },
  //     },
  //   },
  // };
  // const scope = request.body.scope ?? [];
  // request.body.scope = [...scope, proofRequest];

  // Store auth request in map associated with session ID
  requestMap.set(`${sessionId}`, request);

  // return res.status(200).set("Content-Type", "application/json").send(request);
  return NextResponse.json(request, { status: 200 });
}
