import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MapView, { Marker } from 'react-native-maps';

import checkIcon from '../../assets/button-icons/check-icon-alt.png';

// NOTE REGARDING COMMENTED CODE: I could not figure out a way to make the search bar update the map position on enter. (GooglePlacesInput onPress)
// Uncomment all the commented code to see a search bar added to the map screen. See if you can find a solution to make the search bar work.

// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_API_KEY } from '@env';

export default function MapScreen(props) {
  const coords = props.route.params.coordinates;
  const [pickedLocation, setPickedLocation] = useState(coords);

  const initialMapRegion = {
    ...coords,
    // This is the zoom
    longitudeDelta: 0.01,
    latitudeDelta: 0.01
  };

  const selectLocationHandler = e => setPickedLocation({ ...e.nativeEvent.coordinate });

  const confirmHandler = () => {
    props.route.params.onConfirm(pickedLocation);
    props.navigation.goBack();
  };

  // const getPlaceCoords = placeId => {
  //   fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       let placeCoords = res.result.geometry.location;
  //       setPickedLocation({ latitude: placeCoords.lat, longitude: placeCoords.lng });
  //     });
  // };
  //
  // const GooglePlacesInput = () => {
  //   return (
  //     <GooglePlacesAutocomplete
  //       placeholder='Search'
  //       onPress={data => {
  //         getPlaceCoords(data.place_id);
  //       }}
  //       query={{
  //         key: GOOGLE_API_KEY,
  //         language: 'en'
  //       }}
  //       requestUrl={{
  //         useOnPlatform: 'web',
  //         url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api'
  //       }}
  //     />
  //   );
  // };

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} onPress={selectLocationHandler} initialRegion={initialMapRegion}>
        {pickedLocation && <Marker coordinate={pickedLocation}></Marker>}
      </MapView>
      <TouchableOpacity style={styles.confirm} activeOpacity={0.8} onPress={() => confirmHandler()}>
        <View style={styles.iconContainer}>
          <Image source={checkIcon} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
      {/* <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          flex: 0,
          alignItems: 'center',
          marginTop: 40
        }}
      >
        <View style={{ width: '90%', height: '100%' }}>{GooglePlacesInput()}</View>
      </View> */}
    </View>
  );
}
