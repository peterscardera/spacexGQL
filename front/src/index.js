import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import App from "./App.js";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //createHttpLink
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql/",
  }),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
