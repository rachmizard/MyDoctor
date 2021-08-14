import {
  ICAccountCircleOutline,
  ICDescription,
  ICStarOutline,
  ICTranslate,
  UserShayna2,
} from 'assets';
import {ProfileItem} from 'components';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function UserProfile() {
  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
          <Image source={UserShayna2} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
      <View style={styles.items}>
        <ProfileItem
          icon={<ICAccountCircleOutline />}
          infoTitle="Edit Profile"
          infoDesc="Last updated yesterday"
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
  avatarWrapper: {
    padding: 10,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 130 / 2,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
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
