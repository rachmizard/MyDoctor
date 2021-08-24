import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {colors, fonts} from 'utils';

export default function Flash() {
  return (
    <FlashMessage
      position="top"
      style={styles.flash}
      titleStyle={styles.text}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  flash: {
    backgroundColor: colors.error,
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
  },
});
