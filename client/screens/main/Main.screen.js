import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAll, deletePost, resolveFavor } from '../../services/ApiService.service';

import PostList from '../../components/post-list/PostList.component';
import TopBar from '../../components/bars/TopBar.component';
import BottomBar from '../../components/bars/BottomBar.component';
import PostOptions from '../../components/post-options/PostOptions.component';

import corkBackground from '../../assets/cork-texture01.jpg';

export default function Main({ navigation }) {
  const [screen, setScreen] = useState('home');
  const [posts, setPosts] = useState({}); //POSTS.home
  const [postOptions, setPostOptions] = useState({
    visible: false,
    author: false,
    id: '',
    type: '',
    allowMessages: false
  });

  const checkForUser = async () => {
    try {
      // Check if there is a location stored on the device, if not then navigate to LocationPicker screen to do first time setup
      const hasLocation = await AsyncStorage.getItem('@neighbourly_location');
      if (!hasLocation) {
        navigation.replace('LocationPicker');
      } else {
        // Else just fetch all the posts from the database
        refreshPosts();
      }
    } catch (err) {
      Alert.alert('Something went wrong', 'Please restart the app');
      console.error(err);
    }
  };

  const refreshPosts = async () => {
    try {
      const location = await AsyncStorage.getItem('@neighbourly_location');
      const hiddenArr = await AsyncStorage.getItem('@neighbourly_hidden');
      // Remember to always JSON.parse any data you receive from AsyncStorage
      let newPosts = await getAll(JSON.parse(location));

      if (hiddenArr) {
        Object.keys(newPosts).forEach(type => {
          newPosts[type] = newPosts[type].filter(({ _id }) => {
            return !hiddenArr.includes(_id);
          });
        });
      }

      setPosts(newPosts);
    } catch (err) {
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  const goTo = newScreen => {
    setScreen(newScreen);
    // NOTE: Uncomment this if you want to refetch posts any time you change screen
    // refreshPosts();
  };

  const navigateNewPost = () =>
    // This is bad. Passing callback to navigation props is dangerous. Find a solution to this
    navigation.navigate('NewPost', { type: screen, refreshPosts: () => refreshPosts() });

  const navigateSettings = () => navigation.navigate('Settings');

  const displayPostOptions = async (id, type, allowMessages) => {
    try {
      let author = false;
      let authored = await AsyncStorage.getItem('@neighbourly_authored');
      // This will be false if AsyncStorage has no data associatd with @neighbourly_authored
      if (authored) {
        authored = JSON.parse(authored);
        author = authored.includes(id);
      }
      setPostOptions({ visible: true, author, id, type, allowMessages });
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  const handleResolveFavor = async () => {
    try {
      await resolveFavor(postOptions.id);
      // TODO: Shouldn't need to refresh posts here, find a way to update the post to 'resolved' in the client side without doing an API call
      refreshPosts();
      setPostOptions({ ...postOptions, visible: false });
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(postOptions.id, postOptions.type);
      setPostOptions({ ...postOptions, visible: false });
      // TODO: Shouldn't need to refresh posts here, find a way to delete the post on the client side without doing an API call
      refreshPosts();
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  const handleHidePost = async () => {
    try {
      const id = postOptions.id;
      const type = postOptions.type;
      setPostOptions({ ...postOptions, visible: false });

      let hiddenArr = await AsyncStorage.getItem('@neighbourly_hidden');
      if (hiddenArr) {
        hiddenArr = JSON.parse(hiddenArr);
        hiddenArr.push(id);
      } else hiddenArr = [id];
      await AsyncStorage.setItem('@neighbourly_hidden', JSON.stringify(hiddenArr));

      const filteredPosts = { ...posts };

      filteredPosts[type] = filteredPosts[type].filter(({ _id }) => !hiddenArr.includes(_id));

      setPosts(filteredPosts);
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      Alert.alert('Something went wrong', 'Please try again later');
      console.error(err);
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar navigateSettings={navigateSettings} />
      {screen === 'notice' && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            {
              'Post important notices or warnings for your neighbours.\n For nonurgent posts, please use the Home tab.'
            }
          </Text>
        </View>
      )}
      <View>
        <ImageBackground source={corkBackground} style={styles.background} />
        <PostList
          posts={posts[screen]}
          type={screen}
          handleRefresh={cb => refreshPosts(cb)}
          handlePostOptions={displayPostOptions}
        />
      </View>
      <BottomBar
        screen={screen}
        navigateNewPost={() => navigateNewPost()}
        changeScreen={newScreen => goTo(newScreen)}
      />
      <PostOptions
        data-testid="modal"
        postOptions={postOptions}
        handleResolveFavor={() => handleResolveFavor()}
        handleDeletePost={() => handleDeletePost()}
        hidePost={() => handleHidePost()}
        setPostOptions={newObj => setPostOptions(newObj)}
      />
    </View>
  );
}
