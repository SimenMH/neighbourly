import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import logo from '../../assets/logo.png';

export default function TopBar (props) {
  return (
    <View style={styles.topBar}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Neighbourly</Text>
        <View style={styles.settingsBtn}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  topBar: {
    height: 100,
    width: '100%',
    backgroundColor: '#489634',
    shadowColor: "#000",
    elevation: 8,
  },
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 20,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PoetsenOne',
    fontSize: 36,
    color: '#FFF0DA',
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  settingsBtn: {
    
  }
})