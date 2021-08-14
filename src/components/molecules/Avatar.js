import {ICClose} from 'assets';
import {IconButton} from 'components/atoms';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Avatar({pic, name, profession, editable}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={pic} style={styles.avatar} />
      </View>
      {editable && (
        <View style={styles.iconWrapper}>
          <IconButton style={styles.iconButton} icon={<ICClose />} />
        </View>
      )}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.profession}>{profession}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
  iconWrapper: {
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 40,
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
  iconButton: {
    backgroundColor: colors.button.tertiary.background,
    color: colors.button.tertiary.text,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
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
