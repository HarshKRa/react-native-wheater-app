import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import Txt from "../Home/components/Txt/Txt";
import { StyledText, s } from "./Frecasts.style";
import { DAYS, getWeatherInterpretation } from "../../Utils/Meteo-utils";
import { Header } from "../Home/components/Header/Header";
import { ForecasteListItem } from "../Home/components/ForeastListItem/ForecasteListItem";

export default function Forecasts() {
  const date = Date();
  const { params } = useRoute();

  const foreCastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const interpretation = getWeatherInterpretation(weatherCode);
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });

        const formmatedateResult = formattedDate
          .split("/")
          .map((item) => {
            return item.toString().padStart(2, "0");
          })
          .join("/");

        return (
          <ForecasteListItem
            key={time}
            image={interpretation.image}
            day={dayOfWeek}
            date={formmatedateResult}
            temperature={Math.floor(temperature)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {foreCastList}
    </>
  );
}
