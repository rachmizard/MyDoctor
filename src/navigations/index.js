import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigator, Header, HeaderChat} from 'components';
import {
  ChattingPage,
  ChooseDoctorPage,
  DoctorPage,
  DoctorProfilePage,
  EditProfilePage,
  GetStartedPage,
  HospitalsPage,
  LoginPage,
  MessagesPage,
  RegisterPage,
  SplashPage,
  UploadPhotoPage,
  UserProfilePage,
} from 'pages';
import React from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          headerTitle: 'Daftar Akun',
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
};

const AuthorizedApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
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
        name="ChooseDoctor"
        component={ChooseDoctorPage}
        options={{
          headerTitle: 'Pilih Dokter Anak',
          header: props => <Header type="dark" {...props} />,
        }}
      />
      <Stack.Screen
        name="Chatting"
        component={ChattingPage}
        options={{
          headerTitle: 'Nairobi Putri Hayza',
          header: props => <HeaderChat type="dark-chat-profile" {...props} />,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfilePage}
        options={{
          headerTitle: 'Profile',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfilePage}
        options={{
          headerTitle: 'Edit Akun',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfilePage}
        options={{
          headerTitle: 'Profile',
          header: props => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
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
        name="AuthApp"
        component={AuthApp}
        options={{headerShown: false, animation: 'fade'}}
      />
      <Stack.Screen
        name="App"
        component={AuthorizedApp}
        options={{headerShown: false, animation: 'fade'}}
      />
    </Stack.Navigator>
  );
}
