import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import checkIcon from '../../assets/button-icons/check-icon-alt.png';

export default function MapScreen (props) {
  const coords = props.route.params.coordinates;
  const [pickedLocation, setPickedLocation] = useState(coords)
  
  const selectLocationHandler = e => setPickedLocation({...e.nativeEvent.coordinate})
  
  const mapRegion = {
    ...coords,
      longitudeDelta: 0.002,
      latitudeDelta: 0.002
  }

  const confirmHandler = () => {
    props.route.params.onConfirm(pickedLocation);
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1}}
        onPress={selectLocationHandler}
        initialRegion={mapRegion}
      >
        {pickedLocation && <Marker title='Picked Location' coordinate={pickedLocation}></Marker>}
      </MapView>
      <TouchableOpacity style={styles.confirm} activeOpacity={0.8} onPress={() => confirmHandler()}>
        <View style={styles.iconContainer}>
          <Image source={checkIcon} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  confirm: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#215AF3',
    borderRadius: 50,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    height: '50%',
    width: '50%'
  },
})