import { NextResponse } from "next/server";
import { fetchGraphQL } from "@/lib/graphQLClient";
import { LOGIN_USER } from "@/graphql/user/login";

export async function POST(req: Request) {
  const { email } = await req.json();

  const data = await fetchGraphQL<{ loginUser: string }>(LOGIN_USER, {
    email,
  });

  return NextResponse.json(data.loginUser);
}
