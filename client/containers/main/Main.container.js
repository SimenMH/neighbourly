import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PostList from '../../components/post-list/PostList.component';


import corkBackground from '../../assets/cork-texture01.jpg'

export default function Main (props) {
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