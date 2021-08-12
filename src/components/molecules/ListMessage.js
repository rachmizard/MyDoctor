import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function ListMessage({pic, name, message}) {
  return (
    <View style={styles.messageWrapper}>
      <View style={styles.messageItem}>
        <Image source={pic} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chatText}>{message}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
  },
  avatar: {
    marginRight: 12,
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 2,
  },
  chatText: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 14,
  },
});
