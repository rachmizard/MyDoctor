import {ILUserDefault} from 'assets';
import {useAuth} from 'hooks';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, fonts} from 'utils';

export default function HomeProfile({onPress}) {
  const {auth} = useAuth();

  const userPhoto = {
    uri: auth.photoUrl,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={!auth.id ? ILUserDefault : userPhoto}
          style={styles.avatar}
        />
      </TouchableWithoutFeedback>
      <View>
        <Text style={styles.name}>{auth?.fullName}</Text>
        <Text style={styles.profession}>{auth?.job}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
