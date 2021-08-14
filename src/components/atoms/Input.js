import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Input({
  label,
  disabled,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={StyleSheet.flatten([
          styles.input,
          disabled && styles.disabledInput,
          isFocus && styles.focusInput,
        ])}
        editable={!disabled}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginTop: 6,
  },
  disabledInput: {
    backgroundColor: colors.disable,
    color: colors.text.disable,
  },
  focusInput: {
    borderWidth: 1,
    borderColor: colors.tertiary,
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    fontStyle: 'normal',
    color: colors.text.secondary,
  },
});

Input.propTypes = {
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
};
