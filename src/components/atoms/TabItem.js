import {
  ICDoctor,
  ICDoctorActive,
  ICHospital,
  ICHospitalActive,
  ICMessages,
  ICMessagesActive,
} from 'assets';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from 'utils';

export default function TabItem({title, ...props}) {
  const Icon = () => {
    if (title === 'Doctor') {
      return props.isFocused ? <ICDoctorActive /> : <ICDoctor />;
    }

    if (title === 'Messages') {
      return props.isFocused ? <ICMessagesActive /> : <ICMessages />;
    }

    if (title === 'Hospitals') {
      return props.isFocused ? <ICHospitalActive /> : <ICHospital />;
    }

    return <ICDoctor />;
  };

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Icon />
      <Text style={styles.text(props.isFocused)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontFamily: fonts.primary[600],
    color: active ? colors.text.menuActive : colors.text.menuInactive,
  }),
});
