import {UserShayna2} from 'assets';
import {Avatar, Button, Gap, Input} from 'components';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from 'utils';

export default function EditProfile() {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          pic={UserShayna2}
          name="Shayna Melinda"
          profession="Product Designer"
        />
        <View style={styles.form}>
          <Input label="Full Name" value="Shayna Melinnda" />
          <Gap height={24} />
          <Input label="Pekerjaan" value="Product Designer" />
          <Gap height={24} />
          <Input label="Email Address" value="ashayna@google.com" disabled />
          <Gap height={24} />
          <Input label="Password" value="password" secureTextEntry />
          <Gap height={40} />
          <Button title="Save Profile" />
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
