import { NextResponse, NextRequest } from "next/server";
import getRawBody from "raw-body";
import path from "path";
import { auth, resolver, protocol } from "@iden3/js-iden3-auth";
import { requestMap } from "../sign-in/route";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  // Get session ID from request
  //   const sessionId = req.query.sessionId;
  const sessionId = req.nextUrl.searchParams.get("sessionId");

  // get JWZ token params from the post request
  //   const raw = await getRawBody(req);
  //   const tokenStr = raw.toString().trim();

  const raw = await req.text();
  const tokenStr = raw.toString().trim();

  const ethURL = "<MUMBAI_RPC_URL>";
  const contractAddress = "0x134B1BE34911E39A8397ec6289782989729807a4";
  const keyDIR = "../keys";

  const ethStateResolver = new resolver.EthStateResolver(
    ethURL,
    contractAddress
  );

  const resolvers = {
    ["polygon:mumbai"]: ethStateResolver,
  };

  // fetch authRequest from sessionID
  const authRequest = requestMap.get(`${sessionId}`);

  // EXECUTE VERIFICATION
  const verifier = await auth.Verifier.newVerifier({
    stateResolver: resolvers,
    circuitsDir: path.join(__dirname, "./circuits-dir"),
    ipfsGatewayURL: "<gateway url>",
  });

  try {
    const opts = {
      AcceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minute
    };
    //?? opts type mismatch
    //@ts-ignore
    const authResponse = await verifier.fullVerify(tokenStr, authRequest, opts);
    return NextResponse.json(
      "user with ID: " + authResponse.from + "Succesfully authenticated",
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
