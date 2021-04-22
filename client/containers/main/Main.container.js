import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import PostList from '../../components/post-list/PostList.component';
import TopBar from '../../components/bars/TopBar.component';
import BottomBar from '../../components/bars/BottomBar.component';

import corkBackground from '../../assets/cork-texture01.jpg';

import { POSTS } from './mock-data';

export default function Main ({navigation}) {
  const [screen, setScreen] = useState('home')
  const [posts, setPosts] = useState(POSTS.home)

  const goTo = (newScreen) => {
    setScreen(newScreen);
  }

  useEffect(() => {
    setPosts(POSTS[screen]);
  }, [screen])


  return (
    <View style={styles.container}>
      <TopBar />
      <View>
        <ImageBackground source={corkBackground} style={styles.background} />
        <PostList posts={posts}/>
      </View>
      <BottomBar navigation={navigation} handleClick={(newScreen) => goTo(newScreen)}/>
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