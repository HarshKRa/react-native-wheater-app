import { StyleSheet } from "react-native";

const BACK_BUTTON_WITH = 20;
export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    // backgroundColor: "red",
    textAlign: "right",
    minWidth: 50,
  },
});
