import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./Pages/Home/Home";
import { s } from "./App.style";
import backgrounImage from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  
  useEffect(() => {
    getUserCordinates();
  }, []);

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
    <ImageBackground
      imageStyle={s.img}
      style={s.image_background}
      source={backgrounImage}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
