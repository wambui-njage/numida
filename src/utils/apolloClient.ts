import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "@env";

// Custom fetch function with timeout (Network error was taking more than 60sec to timeout)
const fetchWithTimeout = (
  url: RequestInfo | URL,
  options: RequestInit | undefined,
  timeout = 6000
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Network request timed out"));
    }, timeout);

    fetch(url, options)
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
};

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
    fetch: fetchWithTimeout,
  }),
  cache: new InMemoryCache(),
});

export default client;
