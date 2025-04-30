import { fetchGraphQL } from "@/lib/graphql/graphQLClient";
import { LOGIN_USER } from "@/graphql/user/login";

export async function fetchBackendLoginUser(email: string): Promise<string> {
  const data = await fetchGraphQL<{ loginUser: string }>(LOGIN_USER, { email });

  return data.loginUser;
}
