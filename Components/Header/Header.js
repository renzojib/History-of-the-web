import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../assets/headerBackground.png";
import * as Font from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

export default function Header() {
  const [loaded, error] = Font.useFonts({
    'CourierPrimeBold': require("../../assets/fonts/CourierPrime-Bold.ttf")
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={[styles.header1, {fontFamily: "CourierPrimeBold"}]}>History of the Web</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80
  },
  image: {
    height: 80
  },
  header1: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 32,
    fontWeight: "bold",
    color: "#DDDDDD",
  }
});
