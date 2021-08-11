import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from 'utils';

export default function Button({title, type, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.white : colors.button.primary.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
});
