import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function ListHospital({category, title, address, pic}) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View style={styles.titleWrapper}>
        <Text style={styles.type}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{address}</Text>
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
  type: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  location: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
