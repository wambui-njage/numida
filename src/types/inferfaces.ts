import { ViewStyle, TextStyle } from "react-native";

export interface BaseLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
  title?: string; // Optional: Title for the header
}

export interface CustomButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
