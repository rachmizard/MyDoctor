import {ListDoctor} from 'components';
import {JSONDummyData} from 'mocks';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function ChooseDoctor() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {JSONDummyData.chooseDoctors.map(doctor => {
        return (
          <ListDoctor
            iconNext
            key={doctor.id}
            name={doctor.name}
            desc={doctor.gender}
            pic={doctor.pic}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
