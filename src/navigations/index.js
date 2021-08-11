import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartedPage,
  RegisterPage,
  SplashPage,
  LoginPage,
  UploadPhotoPage,
} from 'pages';
import {Header} from 'components';

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
        options={{
          headerTitle: 'Daftar Akun',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhotoPage}
        options={{
          headerTitle: 'Upload Photo',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
