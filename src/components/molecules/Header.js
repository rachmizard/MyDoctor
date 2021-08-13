import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBackDark, ICBackLight} from 'assets';
import {Gap, IconButton} from 'components/atoms';
import {colors, fonts} from 'utils';

export default function Header({options, navigation, type}) {
  const Icon = () => {
    if (type === 'dark') {
      return <ICBackLight />;
    }

    return <ICBackDark />;
  };

  return (
    <View style={styles.header(type)}>
      <IconButton icon={<Icon />} onPress={() => navigation.goBack()} />
      <Text style={styles.title(type)}>{options.headerTitle}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: type => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
