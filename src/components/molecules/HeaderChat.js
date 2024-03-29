import {ICBackLight} from 'assets';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, fonts} from 'utils';
import {IconButton} from '../atoms';

export default function HeaderChat({route, navigation}) {
  const {doctor} = route.params;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, {paddingTop: insets.top}]}>
      <IconButton icon={<ICBackLight />} onPress={() => navigation.goBack()} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{doctor.fullName}</Text>
        <Text style={styles.profession}>{doctor.category}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DoctorProfile', {id: doctor.id})}>
        <Image source={{uri: doctor.photoUrl}} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  profession: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
