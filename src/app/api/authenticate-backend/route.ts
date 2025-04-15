import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { LOGIN_USER } from "@/graphql/user/login";
import { authOptions } from "@/lib/auth/auth";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const result = await fetch(`${process.env.GRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: LOGIN_USER,
      variables: { email: session.user.email },
    }),
  });

  const json = await result.json();

  if (!json.data || !json.data.loginUser) {
    throw new Error(
      `❌ loginUser failed => ${JSON.stringify(json.errors, null, 2)}`,
    );
  }

  const token = json.data.loginUser;

  (await cookies()).set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  let origin = process.env.NEXTAUTH_URL || "http://localhost:3000";
  try {
    origin = new URL(request.url).origin;
  } catch (err) {
    console.warn("Fallback to default origin:", err);
  }

  return NextResponse.redirect(`${origin}/`);
}
