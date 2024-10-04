import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import TabBarIcon from './Components/TabBarIcon';
import Header from './Components/Header/Header';

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
  },
});
