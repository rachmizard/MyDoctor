import {News1} from 'assets';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={News1} style={styles.coverImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: '70%',
  },
  date: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 12,
    marginTop: 4,
  },
  coverImg: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
