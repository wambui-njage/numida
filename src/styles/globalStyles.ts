import { StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "robot-regular", // Assuming you have set up custom font
    color: colors.black,
  },
  accentText: {
    color: colors.accentGreen,
  },
  whiteText: {
    color: colors.white,
  },
  whiteBackground: {
    backgroundColor: colors.lighterGray,
  },
  button: {
    backgroundColor: colors.accentGreen,
    width: 333, // Fixed width
    height: 56, // Fixed height
    padding: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "robot-regular", // Assuming you have set up custom font
    textAlign: "center",
    fontSize: 16,
  },
});

export default globalStyles;
