import {UserShayna2} from 'assets';
import {Avatar, Button, Gap, Input} from 'components';
import {useForm} from 'hooks';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function EditProfile() {
  const [getFields, setField] = useForm({
    fullName: 'Shayna Melinda',
    job: 'Product Designer',
    email: 'ashayna@google.com',
    password: 'password',
  });

  const handleSaveProfile = () => {
    //  update post
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          pic={UserShayna2}
          name="Shayna Melinda"
          profession="Product Designer"
          editable
        />
        <View style={styles.form}>
          <Input
            label="Full Name"
            value={getFields.fullName}
            onChangeText={text => setField('fullName', text)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={getFields.job}
            onChangeText={text => setField('job', text)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={getFields.email} disabled />
          <Gap height={24} />
          <Input
            label="Password"
            value={getFields.password}
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
