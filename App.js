import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import TabBarIcon from './Components/TabBarIcon';
import ModernComputer from "./Components/ModernComputer"
import Header from './Components/Header/Header';
import WorldWideWeb from './Components/WorldWideWeb';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {

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
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontFamily: "Verdana"
  },
});
