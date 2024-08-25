// components/CustomInput.tsx
import React from 'react';
import { View, TextInput, Text, TextStyle, ViewStyle, TextInputFocusEventData } from 'react-native';
import globalStyles from '../styles/globalStyles';

interface CustomInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: TextInputFocusEventData) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  error?: string;
  
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  onBlur,
  keyboardType = 'default',
  error
}) => {
  return (
    <View style={globalStyles.inputContainer}>
      <Text style={globalStyles.label}>{label}</Text>
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
         {error ? <Text style={globalStyles.inputErrorText}>{error}</Text> : null}
    </View>
  );
};

export default CustomInput;
