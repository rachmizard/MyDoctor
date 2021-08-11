import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBackDark} from 'assets';
import {Gap, IconButton} from 'components/atoms';
import {colors, fonts} from 'utils';

export default function Header({title, onPress}) {
  return (
    <View style={styles.header}>
      <IconButton icon={<ICBackDark />} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
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
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
});
