import {
  ICAccountCircleOutline,
  ICDescription,
  ICStarOutline,
  ICTranslate,
  UserShayna2,
} from 'assets';
import {Avatar, Button, Gap, ProfileItem} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Avatar
        pic={UserShayna2}
        name="Shayna Melinda"
        profession="Product Designer"
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
        <Button title="Sign Out" onPress={() => navigation.replace('Login')} />
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
