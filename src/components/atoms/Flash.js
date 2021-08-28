import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {fonts} from 'utils';

export default function Flash() {
  return (
    <FlashMessage
      position="top"
      statusBarHeight={8}
      titleStyle={styles.text}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
