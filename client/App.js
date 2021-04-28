import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, LogBox } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Main from './screens/main/Main.screen';
import NewPost from './screens/new-post/NewPost.screen';
import Settings from './screens/settings/Settings.screen';
import LocationPicker from './screens/location-picker/LocationPicker.screen';
import MapScreen from './screens/map/Map.screen';

LogBox.ignoreAllLogs(); // Removes yellow warnings from popping up infront of the app in Expo during development
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
    resetStorage(); // Temporary, only use this for development
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
          <Stack.Screen name='Settings' component={Settings} />
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
