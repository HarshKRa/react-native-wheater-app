import { Text, View } from "react-native";
import { s } from "./Home.style";

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic Weather info</Text>
      </View>
      <View style={s.serchbar_container}>
        <Text>Search Bar</Text>
      </View>
      <View style={s.meteo_advance}>
        <Text>Advanced weather info</Text>
      </View>
    </>
  );
}
