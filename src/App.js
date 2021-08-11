import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from 'navigations';
import {usePersistNavigation} from 'hooks';
import {ActivityIndicator} from 'react-native';

export default function App() {
  const [initialState, isReady, setItem, PERSISTENCE_KEY] =
    usePersistNavigation();

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state => setItem(PERSISTENCE_KEY, JSON.stringify(state))}>
      <Navigations />
    </NavigationContainer>
  );
}
