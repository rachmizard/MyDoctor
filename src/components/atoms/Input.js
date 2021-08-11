import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

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
    borderColor: '#7D8797',
    borderRadius: 10,
    padding: 12,
    fontFamily: 'Nunito-SemiBold',
  },
  label: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#7D8797',
  },
});
