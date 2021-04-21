import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import TopBar from './components/bars/TopBar.component';
import BottomBar from './components/bars/BottomBar.component';
import Home from './containers/home/Home.container';

export default function App() {
  let [fontsLoaded] = useFonts({
    'PoetsenOne': require('./assets/fonts/Poetsenone.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <TopBar />
        <Home />
        <BottomBar />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAA47A',
    alignItems: 'center',
    flexDirection: 'column',
  }
});
