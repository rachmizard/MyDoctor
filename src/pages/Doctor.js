import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from 'components';
import {JSONDummyData} from 'mocks';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, fonts} from 'utils';

export default function Doctor({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.category}>
              <Gap width={32} />
              {JSONDummyData.doctor.categories.map(({id, category}) => {
                return (
                  <DoctorCategory
                    key={id}
                    category={category}
                    onPress={() =>
                      navigation.navigate('ChooseDoctor', {category})
                    }
                  />
                );
              })}
              <Gap width={22} />
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {JSONDummyData.doctor.ratedDoctors.map(doctor => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.name}
                  profession={doctor.profession}
                  pic={doctor.pic}
                  rate={doctor.rate}
                />
              );
            })}

            <Text style={styles.sectionLabel}>Good News</Text>
            {JSONDummyData.doctor.news.map(item => {
              return (
                <NewsItem
                  key={item.id}
                  title={item.title}
                  createdAt={item.createdAt}
                  pic={item.pic}
                />
              );
            })}

            <Gap height={30} />
          </View>
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
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
    marginTop: 30,
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
