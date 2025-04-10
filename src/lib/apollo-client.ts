import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

export const { getClient } = registerApolloClient(() => {
  const uri = process.env.NEXT_PUBLIC_GRAPHQL_URL;

  if (!uri) {
    console.error("NEXT_PUBLIC_GRAPHQL_URL is not defined");
  }

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
      fetchOptions: { cache: "no-store" },
    }),
  });
});
