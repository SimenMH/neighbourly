import React from 'react';
import { Image } from 'react-native';

// Create .env file in /client with a Google API key
import { GOOGLE_API_KEY } from '@env';

export default function MapPreview(props) {
  let mapUrl;
  if (props.location) {
    mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=17&size=400x200&maptype=roadmap&markers=color:green%7C${props.location.latitude},${props.location.longitude}&key=${GOOGLE_API_KEY}`;
  }

  return <Image source={{ uri: mapUrl }} style={{ width: '100%', height: '100%' }} />;
}
