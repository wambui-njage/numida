import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://192.168.1.30:5000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
