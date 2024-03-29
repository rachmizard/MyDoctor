import {Button, Gap, Input} from 'components';
import {useAuth, useForm} from 'hooks';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {colors, emailReg} from 'utils';

export default function Register({navigation}) {
  const {fields, setField, errors, setErrors, clearForm} = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
    photoUrl: '',
  });

  const {onSignUp, signUpLoading} = useAuth();

  const onSubmitSignUp = () => {
    let reg = emailReg;

    if (!fields.fullName) {
      showMessage({
        message: 'Maaf, Full Name wajib di isi',
        type: 'danger',
      });
      return setErrors(err => ({
        ...err,
        fullName: true,
      }));
    } else {
      setErrors(err => ({
        ...err,
        fullName: false,
      }));
    }

    if (!fields.job) {
      showMessage({
        message: 'Maaf, Job wajib di isi',
        type: 'danger',
      });
      return setErrors(err => ({
        ...err,
        job: true,
      }));
    } else {
      setErrors(err => ({
        ...err,
        job: false,
      }));
    }

    if (reg.test(fields.email) === false) {
      setErrors(err => ({
        ...err,
        email: true,
      }));

      return showMessage({
        message: 'Maaf, email tidak valid',
        type: 'danger',
      });
    } else {
      setErrors(err => ({
        ...err,
        email: false,
      }));
    }

    if (fields.password.length < 6) {
      setErrors(err => ({
        ...err,
        password: true,
      }));

      return showMessage({
        message: 'Maaf, password kurang dari 6 karakter.',
        type: 'danger',
      });
    } else {
      setErrors(err => ({
        ...err,
        password: false,
      }));
    }

    if (!errors.email && !errors.password) {
      onSignUp(fields)
        .then(() => {
          clearForm();
          navigation.replace('App', {screen: 'UploadPhoto'});
        })
        .catch(err => {
          showMessage({
            type: 'danger',
            message: err.message,
          });
        });
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Input
          placeholder="Ex: Dwayne Rodrigo"
          label="Full Name"
          value={fields.fullName}
          hasError={errors.fullName}
          autoCapitalize="words"
          onChangeText={value => {
            setField('fullName', value);
          }}
        />
        <Gap height={24} />
        <Input
          placeholder="Ex: Software Engineer"
          label="Pekerjaan"
          value={fields.job}
          hasError={errors.job}
          autoCapitalize="words"
          onChangeText={value => {
            setField('job', value);
          }}
        />
        <Gap height={24} />
        <Input
          placeholder="Ex: dwayna@gmail.com"
          label="Email Address"
          value={fields.email}
          hasError={errors.email}
          autoCapitalize="none"
          onChangeText={value => {
            setField('email', value);
          }}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={fields.password}
          hasError={errors.password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={value => {
            setField('password', value);
          }}
        />
        <Gap height={24} />
        <Button
          title="Continue"
          loading={signUpLoading}
          onPress={onSubmitSignUp}
        />
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
