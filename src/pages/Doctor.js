import {DoctorCategory, HomeProfile, NewsItem, RatedDoctor} from 'components';
import React from 'react';
import {View, Text} from 'react-native';

export default function Doctor() {
  return (
    <View>
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
