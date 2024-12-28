import { Text, View, Image } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../Txt/Txt";

export function MeteoBasics({ temperature, interpretation }) {
  return (
    <View>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>
          {temperature}
          {"°"}
        </Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </View>
  );
}
