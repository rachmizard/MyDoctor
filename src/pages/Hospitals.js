import {BackgroundHospital} from 'assets';
import {ListHospital} from 'components';
import {JSONDummyData} from 'mocks';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {colors, fonts} from 'utils';

export default function Hospitals() {
  const totalNearbyHospitals = JSONDummyData.hospitals.length;

  return (
    <View style={styles.page}>
      <ImageBackground source={BackgroundHospital} style={styles.background}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Nearby Hospitals</Text>
          <Text style={styles.subheading}>{totalNearbyHospitals} tersedia</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {JSONDummyData.hospitals.map(item => {
            return (
              <ListHospital
                key={item.id}
                title={item.title}
                category={item.category}
                address={item.address}
                pic={item.pic}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  subheading: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  titleWrapper: {
    paddingTop: 30,
  },
  content: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginTop: -30,
    paddingTop: 30,
    overflow: 'hidden',
  },
});
