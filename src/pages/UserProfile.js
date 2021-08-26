import {
  ICAccountCircleOutline,
  ICDescription,
  ICStarOutline,
  ICTranslate,
  UserShayna2,
} from 'assets';
import {Avatar, Button, Gap, ProfileItem} from 'components';
import {useAuth} from 'hooks';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {colors} from 'utils';

export default function UserProfile({navigation}) {
  const {auth, onSignOut, signOutLoading} = useAuth();

  const onHandleLogout = () => {
    onSignOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(err => {
        showMessage({
          type: 'danger',
          message: err.message,
        });
      });
  };

  return (
    <View style={styles.page}>
      <Avatar pic={UserShayna2} name={auth.fullName} profession={auth.job} />
      <View style={styles.items}>
        <ProfileItem
          icon={<ICAccountCircleOutline />}
          infoTitle="Edit Profile"
          infoDesc="Last updated yesterday"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ProfileItem
          icon={<ICTranslate />}
          infoTitle="Translate"
          infoDesc="Available 12 languages"
        />
        <ProfileItem
          icon={<ICStarOutline />}
          infoTitle="Give Us Rate"
          infoDesc="On Google Play Store"
        />
        <ProfileItem
          icon={<ICDescription />}
          infoTitle="Help Center"
          infoDesc="Read our guidelines"
        />
      </View>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          loading={signOutLoading}
          title="Sign Out"
          onPress={onHandleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  items: {
    marginTop: 30,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
});
