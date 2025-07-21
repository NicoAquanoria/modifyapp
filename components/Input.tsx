import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TextInputProps, ViewStyle, TextStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  style,
  inputStyle,
  editable = true,
  secureTextEntry = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          !!error && styles.inputError,
          !editable && styles.inputDisabled,
          inputStyle,
        ]}
        placeholderTextColor="#A0A0A0"
        editable={editable}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#222',
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#222',
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  inputFocused: {
    borderColor: '#6C63FF', // Vibrant accent for focus
  },
  inputError: {
    borderColor: '#FF4D4F',
  },
  inputDisabled: {
    backgroundColor: '#F0F0F0',
    color: '#A0A0A0',
  },
  error: {
    color: '#FF4D4F',
    fontSize: 12,
    marginTop: 4,
  },
}); 