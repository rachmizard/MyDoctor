import {ApolloClient, HttpLink, InMemoryCache, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:4000',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
