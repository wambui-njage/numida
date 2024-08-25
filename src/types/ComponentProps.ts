import { ViewStyle, TextInputFocusEventData } from "react-native";

export interface BaseLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export interface CustomInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: TextInputFocusEventData) => void;
  keyboardType?: "default" | "email-address" | "numeric";
  error?: string;
}
