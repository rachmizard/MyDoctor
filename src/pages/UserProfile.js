import {useMutation} from '@apollo/client';
import {
  ICAccountCircleOutline,
  ICDescription,
  ICStarOutline,
  ICTranslate,
  UserShayna2,
} from 'assets';
import {Avatar, Button, Gap, ProfileItem} from 'components';
import {SIGN_OUT} from 'gql/user/user.typeDefs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {setSignOut} from 'stores/auth/auth.action';
import {colors} from 'utils';

export default function UserProfile({navigation}) {
  const [signOut, {loading}] = useMutation(SIGN_OUT);
  const dispatch = useDispatch();
  const getProfileAuth = useSelector(state => state.authReducer.auth);

  const onHandleLogout = () => {
    signOut()
      .then(() => {
        dispatch(setSignOut());
        navigation.replace('Login');
      })
      .catch(error => {
        showMessage({
          type: 'danger',
          message: error.message,
        });
      });
  };

  return (
    <View style={styles.page}>
      <Avatar
        pic={UserShayna2}
        name={getProfileAuth.fullName}
        profession={getProfileAuth.job}
      />
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
        <Button loading={loading} title="Sign Out" onPress={onHandleLogout} />
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
