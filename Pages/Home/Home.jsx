import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "./components/Txt/Txt";
import { MeteoBasics } from "./components/MeteoBasic/MeteoBasics";
import { getWeatherInterpretation } from "../../Utils/Meteo-utils";

export default function Home({ weather }) {
  const currentWeather = weather.current_weather;
  const currentInterPretation = getWeatherInterpretation(
    currentWeather.weathercode
  );
  console.log(weather);
  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasics
          interpretation={currentInterPretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={s.serchbar_container}>
        <Txt>Search Bar</Txt>
      </View>
      <View style={s.meteo_advance}>
        <Txt>Advanced weather info</Txt>
      </View>
    </>
  );
}
