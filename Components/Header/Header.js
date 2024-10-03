import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../assets/headerBackground.png";

export default function Header() {
  return (
    <View>
      <ImageBackground source={image} resizeMode="cover">
        <Text>History of the Web</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
