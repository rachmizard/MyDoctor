import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from 'navigations';
import {usePersistNavigation} from 'hooks';
import {ActivityIndicator} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {client} from 'gql';
import {Flash} from 'components';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'stores';

export default function App() {
  const {initialState, getPersistenceKey, isReady, setAsyncStorage} =
    usePersistNavigation();

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer
            initialState={initialState}
            onStateChange={state =>
              setAsyncStorage(getPersistenceKey, JSON.stringify(state))
            }>
            <Navigations />
          </NavigationContainer>
          <Flash />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
