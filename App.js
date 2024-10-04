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

  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'end', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header/>
      <TabBarIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
