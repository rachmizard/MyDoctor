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
import {navigationRef} from 'navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
          <SafeAreaProvider>
            <NavigationContainer
              ref={navigationRef}
              initialState={initialState}
              onStateChange={state =>
                setAsyncStorage(getPersistenceKey, JSON.stringify(state))
              }>
              <Navigations />
            </NavigationContainer>
          </SafeAreaProvider>
          <Flash />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}
