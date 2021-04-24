import React from 'react';
import { StyleSheet, Image } from 'react-native';

// Create .env file in /client with a google api key
import { GOOGLE_API_KEY } from '@env';

export default function MapPreview(props) {
  let mapUrl;
  if (props.location) {
    mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=13&size=400x200&maptype=roadmap&markers=${props.location.latitude},${props.location.longitude}&key=${GOOGLE_API_KEY}`;
  }

  return <Image source={{ uri: mapUrl }} style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
});
