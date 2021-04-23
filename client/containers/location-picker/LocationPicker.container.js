import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import MapPreview from './MapPreview';

export default function LocationPicker (props) {
  const [isFetching, setFetching] = useState(true);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    setFetching(true)
    const result = await Location.requestForegroundPermissionsAsync();;
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      )
      return false;
    }
    return true;
  }

  const getCurrentLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
      setPickedLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again later or pick a location on the map.',
        [{ text: 'Okay' }]
      )
    }
    setFetching(false)
  };

  const getLocationHandler = async () => {
    const curSelectedLocation = await AsyncStorage.getItem('@neighbourly_location')
    if (curSelectedLocation) {
      setPickedLocation(JSON.parse(curSelectedLocation));
      setFetching(false)
    } else {
      getCurrentLocation();
    }
  }

  const navigateToMapScreen = () => {
    props.navigation.navigate(
      'MapScreen',
      {
        coordinates: pickedLocation,
        onConfirm: coords => setPickedLocation(coords)
      }
    );
  };

  const confirmLocation = async () => {
    await AsyncStorage.setItem('@neighbourly_location', JSON.stringify(pickedLocation))
    props.navigation.replace('Main');
  };

  useEffect(() => {
    getLocationHandler();
  },[]);
  
  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <MapPreview location={pickedLocation} />
      )}
      {!isFetching && (
        <View>
          <View style={{ margin: 5 }}>
            <Button title="Choose location on map" color={"blue"} onPress={navigateToMapScreen} />
          </View>
          <View style={{ margin: 5 }}>
            <Button title="Use this location" color={"blue"} onPress={confirmLocation}/>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapPreview: {
    height: 200,
    width: 400
  },
});