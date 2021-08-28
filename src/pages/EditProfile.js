import {UserShayna2} from 'assets';
import {Avatar, Button, Gap, Input} from 'components';
import {useAuth, useForm} from 'hooks';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function EditProfile() {
  const {auth} = useAuth();

  const {fields, setField} = useForm({
    fullName: auth.fullName,
    job: auth.job,
    email: auth.email,
    password: '',
  });

  const handleSaveProfile = () => {
    //  update post
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          pic={auth.photoUrl}
          hasPhoto={auth.photoUrl}
          name={auth.fullName}
          profession={auth.job}
          editable
        />
        <View style={styles.form}>
          <Input
            label="Full Name"
            value={fields.fullName}
            onChangeText={text => setField('fullName', text)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={fields.job}
            onChangeText={text => setField('job', text)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={fields.email} disabled />
          <Gap height={24} />
          <Input
            label="Password"
            value={fields.password}
            secureTextEntry
            onChangeText={text => setField('password', text)}
          />
          <Gap height={40} />
          <Button onPress={handleSaveProfile} title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
  },
  form: {
    paddingTop: 26,
    paddingBottom: 40,
  },
});
