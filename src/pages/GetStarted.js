import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetstarted, ILLogo} from 'assets';
import {Button, Gap} from 'components';
import {colors, fonts} from 'utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetstarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('AuthApp', {screen: 'Register'})}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('AuthApp', {screen: 'Login'})}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
