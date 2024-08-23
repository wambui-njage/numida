import { ViewStyle, TextStyle } from "react-native";

export interface BaseLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface CustomButtonProps {
  text: string;
  onPress: () => void;
}
