// components/CustomInput.tsx
import React from 'react';
import { View, TextInput, Text, TextStyle, ViewStyle } from 'react-native';
import globalStyles from '../styles/globalStyles';

interface CustomInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  style,
  textStyle,
}) => {
  return (
    <View style={[globalStyles.inputContainer, style]}>
      <Text style={[globalStyles.label, textStyle]}>{label}</Text>
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;
