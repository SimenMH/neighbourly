import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { GOOGLE_API_KEY } from '@env';

export default function MapPreview (props) {
  let mapUrl;
  if (props.location) {
    mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=13&size=400x200&maptype=roadmap&markers=${props.location.latitude},${props.location.longitude}&key=${GOOGLE_API_KEY}`;
  }

  return (
    <View style={styles.mapPreview}>
    {props.location ?
      <Image source={{uri: mapUrl}} style={styles.map}/> :
      <Text>No location chosen yet!</Text>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  map: {
    width: 400,
    height: 200
  }
})