import {DoctorNairobi, ICBackLight} from 'assets';
import {IconButton} from 'components';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function HeaderChat({options, navigation}) {
  return (
    <View style={styles.header}>
      <IconButton icon={<ICBackLight />} onPress={() => navigation.goBack()} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{options.headerTitle}</Text>
        <Text style={styles.profession}>{options.headerTitle}</Text>
      </View>
      <Image source={DoctorNairobi} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  profession: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
