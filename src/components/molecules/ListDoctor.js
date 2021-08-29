import {ICChevronRight} from 'assets';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, fonts} from 'utils';

export default function ListDoctor({pic, name, desc, iconNext, onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.messageWrapper} onPress={onPress}>
      <View style={styles.messageItem}>
        <Image source={{uri: pic}} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chatText}>{desc}</Text>
        </View>
        {iconNext && <ICChevronRight style={styles.iconNext} />}
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
  info: {
    flex: 1,
  },
  chatText: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 14,
  },
  iconNext: {
    padding: 5,
  },
});
