import { ImageBackground, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./Pages/Home/Home";
import { s } from "./App.style";
import backgrounImage from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MetoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecasts from "./Pages/Forecasts/Forecasts";

const Stack = createNativeStackNavigator();

const navTheam = {
  colors: {
    backgroud: "transparent",
  },
};

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCordinates();
  }, []);

  console.log(weather);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MetoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await MetoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    const coordsResponse = await MetoAPI.fetchCoordsByCity(city);
    setCoordinates(coordsResponse);
  }

  async function getUserCordinates() {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "25.59", lng: "85.13" });
    }
  }
  return (
    <NavigationContainer theme={navTheam}>
      <ImageBackground
        imageStyle={s.img}
        style={s.image_background}
        source={backgrounImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && city && (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "fade" }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => <Home city={city} weather={weather} onSubmitSearch={fetchCoordsByCity} />}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>

              // <Forecasts />
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
