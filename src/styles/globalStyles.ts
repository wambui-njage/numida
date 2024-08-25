import { StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  accentHeader: {
    fontFamily: "robot-bold",
    fontSize: 24,
    letterSpacing: 0.01,
    lineHeight: 33.98,
    textAlign: "left",
    color: colors.accentGreen,
  },
  accentText: {
    color: colors.accentGreen,
  },
  button: {
    backgroundColor: colors.accentGreen,
    borderRadius: 20,
    height: 56,
    justifyContent: "center",
    width: 325,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "robot-bold",
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.lighterAccent,
    borderColor: colors.lighterGray,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    height: 139,
    marginBottom: 10,
    padding: 10,
  },
  cardActions: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
  },
  cardContent: {
    flexDirection: "row",
  },
  cardDetails: {
    flex: 1,
  },
  cardHeader: {
    marginBottom: 15,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
  },
  dashboardHeaderContainer: {
    flex: 1,
    justifyContent: "flex-start",
    top: 70,
    width: "100%",
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
    textAlign: "center",
  },

  footerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderColor: colors.grey,
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: "robot-regular",
    height: 56,
    paddingHorizontal: 10,
    width: 325,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputErrorText: {
    fontFamily: "robot-regular",
    color: colors.error,
    marginTop: 5,
  },
  label: {
    fontFamily: "robot-bold",
    fontSize: 16,
    marginBottom: 8,
  },
  learnMoreButton: {
    alignItems: "center",
    borderColor: colors.accentGreen,
    borderRadius: 15,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingHorizontal: 8,
    width: "70%",
  },
  header: {
    fontFamily: "robot-bold",
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 33.98,
    textAlign: "left",
  },
  subText: {
    color: colors.accentGreen,
    fontFamily: "robot-regular",
    fontSize: 10,
  },
  subtitle: {
    fontFamily: "robot-bold",
    fontSize: 20,
  },
  text: {
    color: colors.black,
    fontFamily: "robot-regular",
  },
  whiteBackground: {
    backgroundColor: colors.lighterGray,
  },
  whiteText: {
    color: colors.white,
  },
});

export default globalStyles;
