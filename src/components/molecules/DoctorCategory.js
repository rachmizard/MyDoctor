import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';
import {
  ILDokterAnak,
  ILDokterObat,
  ILDokterPsikiater,
  ILDokterUmum,
} from 'assets';

const CategoryIcon = ({category, style}) => {
  if (category === 'dokter umum') {
    return <ILDokterUmum style={style} />;
  }
  if (category === 'psikiater') {
    return <ILDokterPsikiater style={style} />;
  }
  if (category === 'dokter obat') {
    return <ILDokterObat style={style} />;
  }
  if (category === 'dokter anak') {
    return <ILDokterAnak style={style} />;
  }
  return <ILDokterUmum style={style} />;
};

export default function DoctorCategory({category}) {
  return (
    <View style={styles.container}>
      <CategoryIcon category={category} style={styles.illustration} />
      <Text style={styles.text(300)}>Saya Butuh</Text>
      <Text style={styles.text(600)}>{category}</Text>
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
    color: colors.text.primary,
  }),
  illustration: {
    marginBottom: 28,
  },
});
