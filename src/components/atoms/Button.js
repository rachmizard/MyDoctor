import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from 'utils';

export default function Button({title, type, onPress, loading, disabled}) {
  const isDisabledWhen = loading || disabled;

  return (
    <TouchableOpacity
      style={[
        styles.container(type),
        loading && styles.loadingContainer,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabledWhen}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <Text style={styles.text(type)}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.white : colors.button.primary.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  loadingContainer: {
    backgroundColor: colors.disable,
  },
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
  disabled: {
    backgroundColor: colors.disable,
  },
});
