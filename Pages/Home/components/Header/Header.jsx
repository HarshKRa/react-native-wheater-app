import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s } from "./Heaer.style";
import Txt from "../Txt/Txt";

export function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_btn} onPress={nav.goBack}>
        <Txt>{"⟵"}</Txt>
      </TouchableOpacity>
      <View>
        <Txt style={s.header_txts}>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
}
