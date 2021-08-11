import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStartedPage, RegisterPage, SplashPage, LoginPage} from 'pages';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStartedPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
