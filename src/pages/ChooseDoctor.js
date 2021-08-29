import {useQuery} from '@apollo/client';
import {ListDoctor} from 'components';
import {GQL_DOCTORS_BY_CATEGORY} from 'gql/doctor/doctor.typeDefs';
import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

export default function ChooseDoctor({route, navigation}) {
  const {category} = route.params;

  const {data, loading, refetch} = useQuery(GQL_DOCTORS_BY_CATEGORY, {
    variables: {category},
  });

  const onRefresh = React.useCallback(() => {
    refetch({category});
  }, [category, refetch]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}>
      {!loading &&
        data.getDoctorsByCategory.map(doctor => {
          return (
            <ListDoctor
              iconNext
              key={doctor.id}
              name={doctor.fullName}
              desc={doctor.gender === 'male' ? 'Pria' : 'Female'}
              pic={doctor.photoUrl}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
    </ScrollView>
  );
}
