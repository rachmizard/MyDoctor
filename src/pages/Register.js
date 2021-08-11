import {Button, Gap, Header, Input} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Button title="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
