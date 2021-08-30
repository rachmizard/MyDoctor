import {useQuery} from '@apollo/client';
import {Avatar, Button, Gap, ProfileItemDoctor} from 'components';
import {GQL_DOCTOR_BY_ID} from 'gql/doctor/doctor.typeDefs';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function DoctorProfile({route, navigation}) {
  const {id} = route.params;

  const {data, loading} = useQuery(GQL_DOCTOR_BY_ID, {
    variables: {id},
  });

  if (loading) {
    return (
      <ActivityIndicator
        size={30}
        color={colors.secondary}
        style={styles.indicator}
      />
    );
  }

  return (
    <View style={styles.page}>
      <Avatar
        pic={data.getDoctorById.photoUrl}
        name={data.getDoctorById.fullName}
        profession={data.getDoctorById.category}
        gender={data.getDoctorById.gender}
        withGender
      />
      <View style={styles.items}>
        <ProfileItemDoctor
          infoTitle="Alumnus"
          infoDesc={data.getDoctorById.alumnus}
        />
        <ProfileItemDoctor
          infoTitle="Tempat Praktik"
          infoDesc={data.getDoctorById.practicePlace}
        />
        <ProfileItemDoctor
          infoTitle="No. STR"
          infoDesc={data.getDoctorById.strNumber}
          withoutBorderBottom
        />
      </View>
      <Gap height={23} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Start Consultation"
          onPress={() =>
            navigation.navigate('Chatting', {doctor: data.getDoctorById})
          }
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
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
