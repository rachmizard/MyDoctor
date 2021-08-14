import {ICSend, ICSendDisable} from 'assets';
import {IconButton} from 'components/atoms';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function InputChat({value, onChange, disabled}) {
  const Icon = () => {
    if (!disabled) {
      return <ICSend />;
    }

    return <ICSendDisable />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
      />
      <IconButton
        disabled={disabled}
        style={styles.button(disabled)}
        icon={<Icon />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    padding: 14,
    backgroundColor: colors.disable,
    borderRadius: 10,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    marginRight: 10,
  },
  button: disabled => ({
    backgroundColor: disabled ? colors.disable : colors.tertiary,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
});
