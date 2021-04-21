import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import PostList from '../../components/post-list/PostList.component';
import TopBar from '../../components/bars/TopBar.component';
import BottomBar from '../../components/bars/BottomBar.component';

import corkBackground from '../../assets/cork-texture01.jpg';

export default function Main (props) {
  return (
    <View style={styles.container}>
      <TopBar />
      <View>
        <ImageBackground source={corkBackground} style={styles.background} />
        <PostList />
      </View>
      <BottomBar />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAA47A',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.1,
  },
});