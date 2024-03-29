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
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from 'utils';

export default function HomeProfile({onPress}) {
  const {auth} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={!auth.photoUrl ? ILUserDefault : {uri: auth.photoUrl}}
          style={styles.avatar}
        />
      </TouchableWithoutFeedback>
      <View>
        <Text style={styles.name}>{auth?.fullName}</Text>
        <Text style={styles.profession}>{auth?.job}</Text>
      </View>
    </SafeAreaView>
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
