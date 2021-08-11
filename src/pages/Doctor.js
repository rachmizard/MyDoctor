import {DoctorCategory, HomeProfile, NewsItem, RatedDoctor} from 'components';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});
