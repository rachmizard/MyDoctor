import {UserShayna1} from 'assets';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors, fonts} from 'utils';
import {useSelector} from 'react-redux';

export default function HomeProfile({onPress}) {
  const getProfileAuth = useSelector(state => state.authReducer.auth);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={UserShayna1} style={styles.avatar} />
      </TouchableWithoutFeedback>
      <View>
        <Text style={styles.name}>{getProfileAuth.fullName}</Text>
        <Text style={styles.profession}>{getProfileAuth.job}</Text>
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
