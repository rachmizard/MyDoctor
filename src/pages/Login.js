import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from 'components';
import {ILLogo} from 'assets';
import {colors, fonts} from 'utils';

export default function Login({navigation}) {
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
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 153,
  },
});
