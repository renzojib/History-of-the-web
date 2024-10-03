import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';


import { TabBarIcon } from './Components/TabBarIcon';
import Main from "./Components/Main"
import Header from './Components/Header/Header';

export default function App() {
  const [articleToDisplay, setArticleToDisplay] = useState(1);

  return (
    <View style={styles.container}>
      <Header></Header>
      <Main articleToDisplay={articleToDisplay}/>
      <TabBarIcon />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
