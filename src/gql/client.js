import {ApolloClient, from, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {createUploadLink} from 'apollo-upload-client';
import {store} from '../stores';
import {rootTypeDef} from './typeDefs';

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
  const token = store.getState().authReducer.auth?.token || '';

  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const link = from([
  errorLink,
  createUploadLink({uri: 'http://192.168.1.7:5000/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
  typeDefs: [rootTypeDef],
});

export default client;
