import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

import Main from './containers/main/Main.container';
import NewPost from './containers/new-post/NewPost.container';
import LocationPicker from './containers/location-picker/LocationPicker.container';
import MapScreen from './containers/location-picker/MapScreen';

const Stack = createStackNavigator();

console.disableYellowBox = true;

export default function App() {
  const [fontsLoaded] = useFonts({
    'PoetsenOne': require('./assets/fonts/Poetsenone.ttf'),
  });

  const resetApp = async () => {
    await AsyncStorage.removeItem('@neighbourly_location');
    await AsyncStorage.removeItem('@neighbourly_authored');
  };

  useState(() => {
    resetApp();
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
        {/* screenOptions={{ animationEnabled: false }} */}
        <Stack.Navigator> 
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="NewPost" component={NewPost} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={LocationPicker} options={{ headerShown: false }} />
          <Stack.Screen name="LocationPicker" component={LocationPicker} options={{ headerShown: false }} />
          <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false}} />
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
