import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import TabBarIcon from './Components/TabBarIcon';
import Header from './Components/Header/Header';

import * as Font from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = Font.useFonts({
    'CourierPrimeBold': require("./assets/fonts/CourierPrime-Bold.ttf"),
    'CourierPrimeRegular': require("./assets/fonts/CourierPrime-Regular.ttf")
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
    <SafeAreaView style={styles.container}>
      <Header/>
      <TabBarIcon />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#778da9',
    justifyContent: 'center',
  },
});
