import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PostList from '../../components/post-list/PostList.component';
import TopBar from '../../components/bars/TopBar.component';
import BottomBar from '../../components/bars/BottomBar.component';

import corkBackground from '../../assets/cork-texture01.jpg';

import { POSTS } from './mock-data';

export default function Main ({navigation}) {
  const [screen, setScreen] = useState('home');
  const [posts, setPosts] = useState(POSTS.home);

  const goTo = (newScreen) => {
    setScreen(newScreen);
  };

  const checkForUser = async () => {
    const hasLocation = await AsyncStorage.getItem('@neighbourly_location');
    if (!hasLocation) {
      navigation.replace('LocationPicker')
    }
  }

  useEffect(() => {
    checkForUser();
  }, [])

  useEffect(() => {
    setPosts(POSTS[screen]);
  }, [screen]);
  
  const navigateNewPost = () => {
    navigation.navigate('NewPost', {type: screen, refreshPosts: () => {setPosts(POSTS[screen])}})
  };

  const navigateSettings = () => {
    navigation.replace('LocationPicker');
  };


  return (
    <View style={styles.container}>
      <TopBar navigateSettings={navigateSettings} />
      <View>
        <ImageBackground source={corkBackground} style={styles.background} />
        <PostList posts={posts}/>
      </View>
      <BottomBar screen={screen} navigateNewPost={() => navigateNewPost()} changeScreen={(newScreen) => goTo(newScreen)}/>
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