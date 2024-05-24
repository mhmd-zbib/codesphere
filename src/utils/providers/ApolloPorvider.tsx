"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../GraphQL/apolloClient";

function ApolloProviderComponent({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children} </ApolloProvider>;
}

export default ApolloProviderComponent;
