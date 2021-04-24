import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Button, ActivityIndicator, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import MapPreview from './MapPreview';

import backIcon from '../../assets/button-icons/back-icon.png';

export default function LocationPicker (props) {
  const [isFetching, setFetching] = useState(true);
  const [pickedLocation, setPickedLocation] = useState();
  const [hasLocation, setHasLocation] = useState(false);

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
      setHasLocation(true);
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
    props.navigation.reset(({index: 0, routes: [{name: 'Main'}]}));
  };

  useEffect(() => {
    getLocationHandler();
  },[]);
  
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={confirmLocation} activeOpacity={0.5} disabled={isFetching}>
          <Text style={styles.barButton}>Confirm</Text>
        </TouchableOpacity>
        {hasLocation && 
          <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.5}>
            <Image source={ backIcon } style={{ width: 40, height: 40 }}/>
          </TouchableOpacity>
        }
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Neighbourly</Text>
        <Text style={styles.contentText}>
          Before you can start using the app, please select your location!
          You will then start seeing posts from neighbours around you!
        </Text>

        <View style={styles.previewContainer}>
          {isFetching ? (
            <ActivityIndicator size="large" color="green" />
          ) : (
            <MapPreview location={pickedLocation} />
          )}
        </View>

        <Text style={styles.contentTextWarning}>You can only change your location once every 30 days!</Text>
        
        <View style={styles.mapButtons}>
          <View style={{ margin: 5 }}>
            <Button style={styles.mapButton} title="Pick location on map" color={"#317851"} onPress={navigateToMapScreen} disabled={isFetching} />
          </View>
          <View style={{ margin: 5 }}>
            <Button style={styles.mapButton} title="Find my location" color={"#317851"} onPress={getCurrentLocation} disabled={isFetching} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#428a30',
    height: '100%',
    width: '100%',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#489634',
    maxHeight: 85,
    width: '100%',
    shadowColor: "#000",
    elevation: 3,
    paddingHorizontal: 15,
    paddingTop: 24,
  },
  barButton: {
    color: '#FFF0DA',
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20
  },
  contentText: {
    color: '#FFF0DA',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: -5,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  contentTextWarning: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5
  },
  // logoTitle: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   maxHeight: 60,
  // },
  title: {
    fontFamily: 'PoetsenOne',
    fontSize: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    color: '#FFF0DA',
    marginBottom: 30,
  },
  // logo: {
  //   height: 50,
  //   width: 50,
  //   marginRight: 10,
  // },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 175,
    width: 350,
    marginTop: 35,
    backgroundColor: '#ededed',
    shadowColor: 'black',
    elevation: 2,
    overflow: 'hidden',
    borderRadius: 10,
  },
  mapButtons: {
    width: 225
  },
  mapButton: {
    borderRadius: 50,
    fontWeight: 'bold'
  }
});