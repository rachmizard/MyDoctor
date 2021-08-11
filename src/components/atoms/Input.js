import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from 'utils';

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
    fontFamily: 'Nunito-SemiBold',
  },
  label: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
    color: colors.text.secondary,
  },
});
