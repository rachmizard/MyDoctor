import {ICChevronRight} from 'assets';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function ProfileItem({icon, infoTitle, infoDesc, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{infoTitle}</Text>
          <Text style={styles.infoDesc}>{infoDesc}</Text>
        </View>
        <ICChevronRight />
      </View>
    </TouchableOpacity>
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
  info: {
    flex: 1,
    marginLeft: 16,
  },
  infoTitle: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 16,
  },
  infoDesc: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    fontSize: 12,
  },
});
