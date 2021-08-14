import {
  ICAccountCircleOutline,
  ICDescription,
  ICStarOutline,
  ICTranslate,
  UserShayna2,
} from 'assets';
import {Avatar, ProfileItem} from 'components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <Avatar pic={UserShayna2} />
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
  },
  profession: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 16,
  },
  items: {
    flex: 1,
    marginTop: 30,
  },
});
