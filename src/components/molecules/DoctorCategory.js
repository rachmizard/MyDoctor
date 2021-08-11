import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';
import {ILDokterUmum} from 'assets';

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <ILDokterUmum style={styles.illustration} />
      <Text style={styles.text(300)}>Saya Butuh</Text>
      <Text style={styles.text(600)}>dokter Umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    padding: 12,
    alignSelf: 'flex-start',
    marginRight: 10,
    width: 100,
    height: 130,
    borderRadius: 10,
  },
  text: bold => ({
    fontSize: 12,
    fontFamily: fonts.primary[bold],
  }),
  illustration: {
    marginBottom: 28,
  },
});
