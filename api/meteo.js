import axios from "axios";
import { Alert } from "react-native";

export class MetoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityByCoords(coords) {
    try {
      const {
        address: { village, state_district, state, country },
      } = (
        await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}&accept-language=en`,
          {
            headers: {
              "User-Agent": "YourAppName/1.0 (contact@yourdomain.com)",
            },
          }
        )
      ).data;
      console.log(village, state_district, state, country);
      return village || state_district || state || country;
    } catch (error) {
      Alert.alert("Aouch !", error);
      console.error("Error fetching city by coordinates:", error);
    }
  }

  static async fetchCoordsByCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
        )
      ).data.results[0];

      return { lat, lng };
    } catch (error) {
      Alert.alert("Aouch! Invalid city");
      throw "Invalid city";
    }
  }
}
