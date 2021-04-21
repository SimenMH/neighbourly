import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TopBar (props) {
  return (
    <Text style={styles.title}>Neighbourly</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'PoetsenOne',
    fontSize: 36,
    // color: '#FFF0DA',
  },
})