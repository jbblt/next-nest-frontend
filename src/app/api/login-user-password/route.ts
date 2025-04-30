import { NextResponse } from "next/server";
import { fetchGraphQL } from "@/lib/graphql/graphQLClient";
import { LOGIN_USER_WITH_PASSWORD } from "@/graphql/user/login";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing email or password" },
      { status: 400 },
    );
  }

  const data = await fetchGraphQL<{
    loginUserWithPassword: { user: any; token: string };
  }>(LOGIN_USER_WITH_PASSWORD, {
    email,
    password,
  });

  return NextResponse.json(data.loginUserWithPassword);
}
