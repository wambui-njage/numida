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
  subText: {
    fontFamily: "robot-regular",
    fontSize: 10,
    color: colors.accentGreen,
  },
  accentHeader: {
    fontFamily: "robot-bold",
    fontSize: 24,
    lineHeight: 33.98,
    letterSpacing: 0.01,
    textAlign: "left",
    color: colors.accentGreen,
  },
  header: {
    fontFamily: "robot-bold",
    fontSize: 30,
    lineHeight: 33.98,
    letterSpacing: 0.01,
    textAlign: "left",
  },

  subtitle: {
    fontFamily: "robot-bold",
    fontSize: 20,
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
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "robot-bold", // Assuming you have set up custom font
    textAlign: "center",
    fontSize: 16,
  },
  card: {
    height: 139,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.lighterAccent,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.lighterGray,
  },
  cardContent: {
    flexDirection: "row",
  },
  cardDetails: {
    flex: 1,
  },
  cardActions: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cardHeader: {
    marginBottom: 15,
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: "center",
  },
  learnMoreButton: {
    borderColor: colors.accentGreen,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    width: "70%",
  },
  dashboardHeaderContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    top: 70,
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "flex-end",
  },
  footerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default globalStyles;
