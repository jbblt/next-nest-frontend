import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text(); // forward as-is

  const githubRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: process.env.GITHUB_TOKEN ?? "",
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await githubRes.text(); // forward raw
  return new NextResponse(data, {
    status: githubRes.status,
    headers: { "Content-Type": "application/json" },
  });
}
