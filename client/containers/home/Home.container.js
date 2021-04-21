import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PostList from '../../components/post-list/PostList.component';


const corkBackground = require('../../assets/cork-texture01.jpg')

export default function Home (props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={corkBackground} style={styles.background} />
      <PostList />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1,
  },
})