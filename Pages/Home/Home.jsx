import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "./components/Txt/Txt";
import { MeteoBasics } from "./components/MeteoBasic/MeteoBasics";
import { getWeatherInterpretation } from "../../Utils/Meteo-utils";
import MetoAdvance from "./components/MetoAdvance/MetoAdvance";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home({ city, weather, onSubmitSearch }) {
  const currentWeather = weather.current_weather;
  const currentInterPretation = getWeatherInterpretation(
    currentWeather.weathercode
  );

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasics
          dailyWeather={weather.daily}
          city={city}
          interpretation={currentInterPretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={s.serchbar_container}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={s.meteo_advance}>
        <MetoAdvance
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
}
