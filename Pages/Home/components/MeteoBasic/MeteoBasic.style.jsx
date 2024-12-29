import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  contaioner: {
    gap: 12,
  },
  clock: {
    alignItems: "flex-end",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt: {
    fontSize: 20,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: {
    fontSize: 100,
  },
  image: {
    height: 90,
    width: 90,
  },
});
