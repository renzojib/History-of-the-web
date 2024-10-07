import { ImageBackground, StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import image from "../../assets/headerBackground.png";
import * as Font from 'expo-font';

export default function Header() {
  
  console.log(`\n\tHEADER: \n\t\tIs CourierPrimeBold Loaded:\n\t\t${Font.isLoaded("CourierPrimeBold")}`)

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
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderTopColor: "#001f54",
    borderTopWidth: 2,
    height: 80,
  },
  image: {
    width: "100%",
    height: 80,
  },
  header1: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 32,
    color: "#DDDDDD",
    fontFamily: "CourierPrimeBold",
  }
});
