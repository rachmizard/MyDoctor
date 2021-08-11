import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textDecorationLine: 'underline',
    fontSize: size,
    textAlign: align,
  }),
});
