import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Main from "./Components/Main"
import { useState } from 'react';

export default function App() {
  const [articleToDisplay, setArticleToDisplay] = useState(1)

  return (
    <View style={styles.container}>
      <Main articleToDisplay={articleToDisplay}/>
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
