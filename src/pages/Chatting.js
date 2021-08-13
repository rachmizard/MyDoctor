import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem} from 'components';
import {colors, fonts} from 'utils';
import {DoctorNairobi} from 'assets';

export default function Chatting() {
  return (
    <View style={styles.page}>
      <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
      <ChatItem
        message="Ibu dokter, apakah memakan jeruk tiap hari itu buruk? Soalnya aku masih bingung dok senah mah ada yang bisa buat ngilangin stress juga heheh"
        createdAt="4.20 PM"
        me={true}
      />
      <ChatItem
        pic={DoctorNairobi}
        message="Oh tentu saja tidak karena jeruk itu sangat sehat..."
        createdAt="4.45 PM"
        me={false}
      />
      <ChatItem
        pic={DoctorNairobi}
        message="Kalo perlu juga sehari 5x itu baik kok bu, beli yang fresh."
        createdAt="4.47 PM"
        me={false}
      />
      <ChatItem
        message="Ohhh gitu ya.. nanti saya coba beli di pasar baru biasanya bagus bagus.."
        createdAt="4.47 PM"
        me={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
});
