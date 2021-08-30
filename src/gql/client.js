import {ApolloClient, from, InMemoryCache} from '@apollo/client';
import {HttpLink} from '@apollo/client/core';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {showMessage} from 'react-native-flash-message';
import {store} from '../stores';
import {rootTypeDef} from './typeDefs';
import * as RootNavigation from 'navigations/RootNavigation';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({extensions, message, locations, path}) => {
      if (extensions.code === 'UNAUTHENTICATED') {
        RootNavigation.replace('AuthApp', {screen: 'Login'});
      }

      showMessage({
        type: 'danger',
        message,
      });

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
  new HttpLink({uri: 'http://192.168.1.7:5000/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
  typeDefs: [rootTypeDef],
});

export default client;
