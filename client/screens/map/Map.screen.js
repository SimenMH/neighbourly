import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MapView, { Marker } from 'react-native-maps';

import checkIcon from '../../assets/button-icons/check-icon-alt.png';

export default function MapScreen(props) {
  const coords = props.route.params.coordinates;
  const [pickedLocation, setPickedLocation] = useState(coords);

  const selectLocationHandler = e => setPickedLocation({ ...e.nativeEvent.coordinate });

  const mapRegion = {
    ...coords,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01
  };

  const confirmHandler = () => {
    props.route.params.onConfirm(pickedLocation);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} onPress={selectLocationHandler} initialRegion={mapRegion}>
        {pickedLocation && <Marker coordinate={pickedLocation}></Marker>}
      </MapView>
      <TouchableOpacity style={styles.confirm} activeOpacity={0.8} onPress={() => confirmHandler()}>
        <View style={styles.iconContainer}>
          <Image source={checkIcon} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
