import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function isMe({message, pic, createdAt}) {
  return (
    <View style={styles.container}>
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
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: colors.cardLight,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 16,
    maxWidth: '80%',
  },
  chatWrapper: {
    marginLeft: 0,
  },
  text: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  date: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    marginTop: 8,
    textAlign: 'right',
  },
});
