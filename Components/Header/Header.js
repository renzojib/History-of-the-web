import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../assets/headerBackground.png";
import CourierPrime_700Bold from "@expo-google-fonts/courier-prime"

export default function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.header1}>History of the Web</Text>
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
    fontSize: 42,
    fontWeight: "bold",
    color: "#DDDDDD",
    fontFamily: CourierPrime_700Bold
  }
});
