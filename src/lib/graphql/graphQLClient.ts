import { GraphQLRequestError } from "./GraphQLRequestError";
import { auth } from "@/lib/auth/auth";

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, any> = {},
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const token = await auth();

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let res: Response;

  try {
    res = await fetch(process.env.GRAPHQL_URL!, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    });
  } catch (err) {
    throw new GraphQLRequestError("Network request failed", 500, err);
  }

  if (!res.ok) {
    throw new GraphQLRequestError(
      `Server error: ${res.statusText}`,
      res.status,
    );
  }

  let json: any;
  try {
    json = await res.json();
  } catch (err) {
    throw new GraphQLRequestError("Invalid JSON response", res.status, err);
  }

  if (json.errors?.length) {
    throw new GraphQLRequestError(
      "GraphQL errors",
      res.status,
      json.errors
        .map((error: { message: string }) => error.message)
        .join(" | "),
    );
  }

  return json.data as T;
}
