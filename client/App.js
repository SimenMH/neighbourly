import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Main from './containers/main/Main.container';
import Create from './containers/create/Create.container';

const Stack = createStackNavigator();

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
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="Create" component={Create} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAA47A'
  }
});
