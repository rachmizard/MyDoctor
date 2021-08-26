import {ILLogo} from 'assets';
import {useAuth} from 'hooks';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Splash({navigation}) {
  const {checkAuth} = useAuth();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (checkAuth) {
        navigation.replace('App', {screen: 'MainApp'});
      } else {
        navigation.replace('GetStarted');
      }
    }, 400);

    return () => {
      clearTimeout(timeOut);
    };
  }, [checkAuth, navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
});
