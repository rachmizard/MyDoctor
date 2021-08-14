import {DoctorNairobi} from 'assets';
import {Avatar, Button, Gap, ProfileItemDoctor} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Avatar
        pic={DoctorNairobi}
        name="Nairobi Putri Hayza"
        profession="Dokter Anak"
        gender="female"
        withGender
      />
      <View style={styles.items}>
        <ProfileItemDoctor
          infoTitle="Alumnus"
          infoDesc="Universitas Indonesia, 2003"
        />
        <ProfileItemDoctor
          infoTitle="Tempat Praktik"
          infoDesc="Rumah Sakit Umum, Bandung"
        />
        <ProfileItemDoctor
          infoTitle="No. STR"
          infoDesc="0000116622081996"
          withoutBorderBottom
        />
      </View>
      <Gap height={23} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
  },
  items: {
    marginTop: 26,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
});
