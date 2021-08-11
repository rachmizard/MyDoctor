import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    fontFamily: fonts.primary[600],
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    fontStyle: 'normal',
    color: colors.text.secondary,
  },
});
