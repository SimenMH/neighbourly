import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
      <TouchableOpacity style={styles.confirm} onPress={() => confirmHandler()}>
        <View></View>
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
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
  }
})