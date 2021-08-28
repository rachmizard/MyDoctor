import {useMutation} from '@apollo/client';
import {Avatar, Button, Gap, Link} from 'components';
import {IMAGE_PICKER_OPTIONS} from 'constant';
import {UPLOAD_USER_PHOTO} from 'gql/user/user.typeDefs';
import {useAuth} from 'hooks';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {updateUser} from 'stores/auth/auth.action';
import {colors} from 'utils';

export default function UploadPhoto({navigation}) {
  const {auth} = useAuth();
  const [hasPhoto, setHasPhoto] = useState(false);
  const [media, setMedia] = useState({});
  const [uploadUserPhoto, {loading}] = useMutation(UPLOAD_USER_PHOTO);
  const dispatch = useDispatch();

  function handleLaunchImageLibrary() {
    return launchImageLibrary(
      IMAGE_PICKER_OPTIONS,
      ({assets, didCancel, errorMessage}) => {
        if (assets) {
          setHasPhoto(true);
          setMedia(assets[0]);
        }

        if (didCancel) {
          setMedia({});
          setHasPhoto(false);
        }

        if (errorMessage) {
          showMessage({
            type: 'warning',
            message: errorMessage,
          });
        }
      },
    );
  }

  function handleRemovePhoto() {
    setMedia({});
    setHasPhoto(false);
  }

  function handleUploadPhoto() {
    if (media) {
      const file = media;
      uploadUserPhoto({variables: {file}})
        .then(({data}) => {
          dispatch(
            updateUser({
              ...auth,
              photoUrl: data.uploadUserPhoto.url,
            }),
          );

          navigation.replace('MainApp');
        })
        .catch(error => {
          showMessage({
            type: 'warning',
            message: error.message,
          });
        });
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            pic={media.uri}
            name={auth.fullName}
            profession={auth.job}
            hasPhoto={hasPhoto}
            onPressAddPhoto={handleLaunchImageLibrary}
            onPressRemovePhoto={handleRemovePhoto}
            editable
          />
        </View>
        <View>
          <Button
            loading={loading}
            disabled={!hasPhoto}
            title="Upload and Continue"
            onPress={handleUploadPhoto}
          />
          <Gap height={30} />
          <Link
            onPress={() => navigation.replace('MainApp')}
            title="Skip for this"
            align="center"
            size={16}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
    paddingHorizontal: 40,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
