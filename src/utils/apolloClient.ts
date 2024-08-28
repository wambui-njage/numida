import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "@env";

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});

export default client;
