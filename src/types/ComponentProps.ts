import { ViewStyle, TextInputFocusEventData } from "react-native";
import { LoanProduct } from "./Loan";

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

export interface HeaderProps {
  title: string;
}

export interface LoadingIndicatorProps {
  size?: "small" | "large";
  color?: string;
}

export interface LoanProductCardProps {
  product: LoanProduct;
  isActive: boolean;
  onPress: () => void;
}

export interface LoanProductModalProps {
  visible: boolean;
  product: LoanProduct | null;
  onClose: () => void;
}
