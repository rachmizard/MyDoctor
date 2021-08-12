import {Hospital1} from 'assets';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={Hospital1} style={styles.image} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.location}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  image: {
    borderRadius: 11,
    width: 80,
    height: 60,
    marginRight: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    maxWidth: '48%',
  },
  location: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
