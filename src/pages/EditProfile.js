import {Avatar, Button, Gap, Input} from 'components';
import {IMAGE_PICKER_OPTIONS} from 'constant';
import {useAuth, useForm} from 'hooks';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors} from 'utils';

export default function EditProfile() {
  const {auth, updateAuth, updateAuthLoading} = useAuth();

  const {fields, setField} = useForm({
    fullName: auth.fullName,
    job: auth.job,
    email: auth.email,
    password: null,
    photoUrl: auth.photoUrl,
  });

  const handleLaunchLibraryImage = () => {
    return launchImageLibrary(IMAGE_PICKER_OPTIONS, cb => {
      if (cb.assets) {
        setField('photoUrl', cb.assets[0].uri);
      }
    });
  };

  const handleRemovePhoto = () => {
    setField('photoUrl', '');
  };

  const handleSaveProfile = () => {
    updateAuth(fields)
      .then(() =>
        showMessage({type: 'success', message: 'Successfully Updated'}),
      )
      .catch(error => showMessage({type: 'success', message: error.message}));
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          pic={fields.photoUrl}
          name={auth.fullName}
          onPressAddPhoto={handleLaunchLibraryImage}
          onPressRemovePhoto={handleRemovePhoto}
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
          <Button
            onPress={handleSaveProfile}
            title="Save Profile"
            loading={updateAuthLoading}
          />
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
