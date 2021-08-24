import {ApolloClient, HttpLink, InMemoryCache, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import {store} from '../stores';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const authLink = setContext((_, {headers}) => {
  const token = store.getState().authReducer.auth.token;
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://192.168.1.7:4000/graphql',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default client;
