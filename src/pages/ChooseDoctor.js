import {useQuery} from '@apollo/client';
import {ListDoctor, ListEmpty} from 'components';
import {GQL_DOCTORS_BY_CATEGORY} from 'gql/doctor/doctor.typeDefs';
import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function ChooseDoctor({route, navigation}) {
  const {category} = route.params;

  const {data, loading, refetch} = useQuery(GQL_DOCTORS_BY_CATEGORY, {
    variables: {category},
  });

  if (loading) {
    return (
      <ActivityIndicator style={styles.indicator} size={30} color="black" />
    );
  }

  if (data === undefined || data.getDoctorsByCategory.length === 0) {
    return <ListEmpty description="Doctors are unavailable :(" />;
  }

  const onRefresh = () => {
    refetch({category});
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}>
      {data &&
        data.getDoctorsByCategory.map(doctor => {
          return (
            <ListDoctor
              iconNext
              key={doctor.id}
              name={doctor.fullName}
              desc={doctor.gender === 'male' ? 'Pria' : 'Female'}
              pic={doctor.photoUrl}
              onPress={() => navigation.navigate('Chatting', {doctor})}
            />
          );
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
