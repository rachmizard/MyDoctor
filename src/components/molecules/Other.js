import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Other({message, pic, createdAt}) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.avatar} />
      <View style={styles.chatWrapper}>
        <View style={styles.content}>
          <Text style={styles.text}>{message}</Text>
        </View>
        <Text style={styles.date}>{createdAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: colors.primary,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    padding: 16,
    maxWidth: '90%',
  },
  chatWrapper: {
    marginLeft: 12,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  date: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    marginTop: 8,
  },
});
