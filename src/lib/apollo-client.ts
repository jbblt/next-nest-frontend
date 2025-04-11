import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

const isServer = typeof window === "undefined";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  fetchOptions: { cache: "no-store" },
  headers: isServer
    ? {
        Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
      }
    : {},
});

export const { getClient } = registerApolloClient(
  (): ApolloClient<NormalizedCacheObject> => {
    return new ApolloClient({
      link: ApolloLink.from([httpLink]),
      cache: new InMemoryCache(),
    });
  },
);
