import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import Main from './containers/main/Main.container';

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
        <Main />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAA47A'
  }
});
