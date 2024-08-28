// navigationTypes.ts
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Dashboard: undefined;
  ApplyForm: undefined;
};

export type DashboardNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Dashboard"
>;
export type ApplyFormNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "ApplyForm"
>;
