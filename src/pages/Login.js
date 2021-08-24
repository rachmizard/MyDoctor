import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from 'components';
import {ILLogo} from 'assets';
import {colors, emailReg, fonts} from 'utils';
import {useForm} from 'hooks';
import {showMessage} from 'react-native-flash-message';
import {useMutation} from '@apollo/client';
import {SIGN_IN} from 'gql/user/user.typeDefs';

export default function Login({navigation}) {
  const {fields, setField, errors, setErrors} = useForm({
    email: '',
    password: '',
  });

  const [signIn, {loading}] = useMutation(SIGN_IN);

  const onSubmitSignIn = () => {
    if (!fields.email) {
      setErrors(err => ({...err, email: true}));

      return showMessage({
        type: 'danger',
        message: 'Maaf, email tidak boleh kosong',
        backgroundColor: colors.error,
      });
    } else {
      setErrors(err => ({...err, email: false}));
    }

    if (!emailReg.test(fields.email)) {
      setErrors(err => ({...err, email: true}));

      return showMessage({
        type: 'danger',
        message: 'Maaf, tidak valid',
        backgroundColor: colors.error,
      });
    } else {
      setErrors(err => ({...err, email: false}));
    }

    if (!fields.password) {
      setErrors(err => ({...err, password: true}));

      return showMessage({
        type: 'danger',
        message: 'Maaf, Password tidak boleh kosong',
        backgroundColor: colors.error,
      });
    } else {
      setErrors(err => ({...err, password: false}));
    }

    if (fields.password.length < 6) {
      setErrors(err => ({...err, password: true}));

      return showMessage({
        type: 'danger',
        message: 'Maaf, Password kurang dari 6 karakter',
        backgroundColor: colors.error,
      });
    } else {
      setErrors(err => ({...err, password: false}));
    }

    signIn({variables: fields})
      .then(() => {
        showMessage({
          type: 'success',
          message: 'Successfully Logged in',
        });

        navigation.replace('MainApp');
      })
      .catch(err => {
        showMessage({
          type: 'danger',
          message: err.message,
        });
      });
  };

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input
        label="Email"
        value={fields.email}
        hasError={errors.email}
        onChangeText={value => setField('email', value)}
      />
      <Gap height={24} />
      <Input
        label="Password"
        secureTextEntry
        value={fields.password}
        onChangeText={value => setField('password', value)}
        hasError={errors.password}
      />
      <Gap height={10} />
      <Link title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" loading={loading} onPress={onSubmitSignIn} />
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
