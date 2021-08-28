import {
  ICClose,
  ICAddBtnPhoto,
  ICGenderFemale,
  ICGenderMale,
  ILUserDefault,
} from 'assets';
import {IconButton} from 'components/atoms';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Avatar({
  pic,
  name,
  profession,
  editable,
  gender,
  withGender,
  onPressAddPhoto,
  onPressRemovePhoto,
}) {
  const GenderIcon = () => {
    if (gender === 'female') {
      return (
        <View style={styles.iconWrapper}>
          <IconButton
            style={[styles.iconButton, styles.iconFemale]}
            icon={<ICGenderFemale />}
          />
        </View>
      );
    }
    return (
      <View style={styles.iconWrapper}>
        <IconButton
          style={[styles.iconButton, styles.iconMale]}
          icon={<ICGenderMale />}
        />
      </View>
    );
  };

  const EditableIcon = () => {
    return (
      <View style={styles.iconWrapper}>
        <IconButton
          onPress={pic ? onPressRemovePhoto : onPressAddPhoto}
          style={[styles.iconButton, styles.normal]}
          icon={pic ? <ICClose /> : <ICAddBtnPhoto />}
        />
      </View>
    );
  };

  const AvatarPic = () => {
    return pic ? (
      <Image source={{uri: pic}} style={styles.avatar} />
    ) : (
      <Image source={ILUserDefault} style={styles.avatar} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <AvatarPic />
        {editable && <EditableIcon />}
        {gender !== null && withGender && <GenderIcon />}
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.profession}>{profession}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    padding: 10,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 130 / 2,
    position: 'relative',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  iconWrapper: {
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 40,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconButton: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normal: {
    backgroundColor: colors.button.tertiary.background,
  },
  iconMale: {
    backgroundColor: colors.tertiary,
  },
  iconFemale: {
    backgroundColor: colors.button.tertiary.background,
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
});
