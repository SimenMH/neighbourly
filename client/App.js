import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Main from './screens/main/Main.container';
import NewPost from './screens/new-post/NewPost.container';
import LocationPicker from './screens/location-picker/LocationPicker.container';
import MapScreen from './screens/location-picker/MapScreen';

console.disableYellowBox = true;
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    PoetsenOne: require('./assets/fonts/Poetsenone.ttf')
  });

  const resetStorage = async () => {
    try {
      await AsyncStorage.removeItem('@neighbourly_location');
      await AsyncStorage.removeItem('@neighbourly_authored');
      await AsyncStorage.removeItem('@neighbourly_interested');
      await AsyncStorage.removeItem('@neighbourly_hidden');
    } catch (err) {
      console.error(err);
    }
  };

  useState(() => {
    resetStorage(); // Temporary
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size='large' color='purple' />
      </View>
    );
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='NewPost' component={NewPost} />
          <Stack.Screen name='Settings' component={LocationPicker} />
          <Stack.Screen name='LocationPicker' component={LocationPicker} />
          <Stack.Screen name='MapScreen' component={MapScreen} />
        </Stack.Navigator>
        <StatusBar style='auto' />
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
