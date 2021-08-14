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
  ChooseDoctorPage,
  ChattingPage,
  UserProfilePage,
  EditProfilePage,
  DoctorProfilePage,
} from 'pages';
import {BottomNavigator, Header, HeaderChat} from 'components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctorPage}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Pilih Dokter Anak',
          header: props => <Header type="dark" {...props} />,
        }}
      />
      <Stack.Screen
        name="Chatting"
        component={ChattingPage}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Nairobi Putri Hayza',
          header: props => <HeaderChat type="dark-chat-profile" {...props} />,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfilePage}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Profile',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfilePage}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Edit Akun',
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfilePage}
        options={{
          animation: 'slide_from_right',
          headerTitle: 'Profile',
          header: props => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
