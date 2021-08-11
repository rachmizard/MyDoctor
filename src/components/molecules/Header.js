import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBackDark} from 'assets';
import {Gap} from 'components/atoms';
import {colors} from 'utils';

export default function Header() {
  return (
    <View style={styles.header}>
      <ICBackDark />
      <Text style={styles.title}>Daftar Akun</Text>
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
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
