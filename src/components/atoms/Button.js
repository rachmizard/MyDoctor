import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({title, type, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
  }),
});
