import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from 'components';
import {ILLogo} from 'assets';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 153,
  },
});
