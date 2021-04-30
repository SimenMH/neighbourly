import React, { useState, useEffect } from 'react';
import { View, Image, Button, ActivityIndicator, Alert, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import MapPreview from '../../components/map-preview/MapPreview.component';

//import backIcon from '../../assets/button-icons/back-icon.png';

export default function LocationPicker(props) {
  const [isFetching, setIsFetching] = useState(true);
  const [pickedLocation, setPickedLocation] = useState();
  const [hasLocation, setHasLocation] = useState(false);

  const verifyPermissions = async () => {
    setIsFetching(true);
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status !== 'granted') {
      Alert.alert('Insufficient permissions!', 'You need to grant location permissions to use this app.', [
        { text: 'Okay' }
      ]);
      return false;
    }
    return true;
  };

  const getCurrentLocation = async () => {
    try {
      const hasPermission = await verifyPermissions();
      if (hasPermission) {
        const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
        setPickedLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      }
    } catch (err) {
      Alert.alert('Could not fetch location!', 'Please try again later or pick a location on the map.', [
        { text: 'Okay' }
      ]);
      console.error(err);
    }
    setIsFetching(false);
  };

  const getLocationHandler = async () => {
    try {
      const curSelectedLocation = await AsyncStorage.getItem('@neighbourly_location');
      if (curSelectedLocation) {
        setHasLocation(true);
        setPickedLocation(JSON.parse(curSelectedLocation));
        setIsFetching(false);
      } else {
        getCurrentLocation();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const navigateToMapScreen = () => {
    props.navigation.navigate('MapScreen', {
      coordinates: pickedLocation,
      onConfirm: coords => setPickedLocation(coords)
    });
  };

  const confirmLocation = async () => {
    try {
      await AsyncStorage.setItem('@neighbourly_location', JSON.stringify(pickedLocation));
      props.navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
    } catch (err) {
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  useEffect(() => {
    getLocationHandler();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={confirmLocation} activeOpacity={0.5} disabled={isFetching}>
          <Text style={styles.barButton}>Confirm</Text>
        </TouchableOpacity>
        {hasLocation && (
          <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.5}>
            <Image source={'backIcon'} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Neighbourly</Text>
        <Text style={styles.contentText}>
          Before you can start using the app, please select your location! You will then start seeing posts
          from neighbours around you!
        </Text>

        <View style={styles.previewContainer}>
          {isFetching ? (
            <ActivityIndicator size='large' color='green' />
          ) : (
            <MapPreview location={pickedLocation} />
          )}
        </View>

        <Text style={styles.contentTextWarning}>You can only change your location once every 30 days!</Text>

        <View style={styles.mapButtons}>
          <View style={{ margin: 5 }}>
            <Button
              title='Pick location on map'
              style={styles.mapButton}
              color={'#317851'}
              onPress={navigateToMapScreen}
              disabled={isFetching}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Button
              title='Find my location'
              style={styles.mapButton}
              color={'#317851'}
              onPress={getCurrentLocation}
              disabled={isFetching}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
