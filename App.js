import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Text, View } from 'react-native';
=======
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Main from "./Components/Main"
<<<<<<< Updated upstream
import Header from './Components/Header/Header';
=======
import Header from './Header/Header';
import { TabBarIcon } from './Components/TabBarIcon';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
