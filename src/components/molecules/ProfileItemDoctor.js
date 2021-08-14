import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function ProfileItemDoctor({
  infoTitle,
  infoDesc,
  withoutBorderBottom,
}) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        withoutBorderBottom && styles.withoutBorderBottom,
      ])}>
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{infoTitle}</Text>
        <Text style={styles.infoDesc}>{infoDesc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 16,
  },
  withoutBorderBottom: {
    borderBottomWidth: 0,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  infoTitle: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 16,
  },
  infoDesc: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 14,
  },
});
