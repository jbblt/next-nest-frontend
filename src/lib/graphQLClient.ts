import { auth } from "@/lib/auth/auth";

export async function fetchGraphQL<T>(query: string, variables = {}) {
  const token = await auth();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data as T;
}
