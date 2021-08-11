import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  GetStartedPage,
  RegisterPage,
  SplashPage,
  LoginPage,
  UploadPhotoPage,
  DoctorPage,
  MessagesPage,
  HospitalsPage,
} from 'pages';
import {Header} from 'components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen component={DoctorPage} name="Doctor" />
      <Tab.Screen component={MessagesPage} name="Messages" />
      <Tab.Screen component={HospitalsPage} name="Hospitals" />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
