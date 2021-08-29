import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {colors, fonts} from 'utils';

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.link(size, align)}>{title}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    fontSize: size,
    textAlign: align,
  }),
});
