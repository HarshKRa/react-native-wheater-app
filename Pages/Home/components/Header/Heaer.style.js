import { StyleSheet } from "react-native";

const BACK_BUTTON_WITH = 20;
export const s = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  back_btn: {
    width: BACK_BUTTON_WITH,
  },
  header_txts: {
    flex: 1,
    marginRight: BACK_BUTTON_WITH,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
  },
});
