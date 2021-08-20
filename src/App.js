import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from 'navigations';
import {usePersistNavigation} from 'hooks';
import {ActivityIndicator} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from 'gql';

export default function App() {
  const {initialState, getPersistenceKey, isReady, setAsyncStorage} =
    usePersistNavigation();

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          setAsyncStorage(getPersistenceKey, JSON.stringify(state))
        }>
        <Navigations />
      </NavigationContainer>
    </ApolloProvider>
  );
}
