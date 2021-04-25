import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAll, deletePost } from '../../services/ApiService.service';

import PostList from '../../components/post-list/PostList.component';
import TopBar from '../../components/bars/TopBar.component';
import BottomBar from '../../components/bars/BottomBar.component';

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
      const hasLocation = await AsyncStorage.getItem('@neighbourly_location');
      if (!hasLocation) {
        navigation.replace('LocationPicker');
      } else {
        refreshPosts();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const refreshPosts = async () => {
    try {
      const location = await AsyncStorage.getItem('@neighbourly_location');
      const hiddenArr = await AsyncStorage.getItem('@neighbourly_hidden');
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
      console.error(err);
    }
  };

  const goTo = newScreen => {
    setScreen(newScreen);
    refreshPosts();
  };

  const navigateNewPost = () =>
    navigation.navigate('NewPost', { type: screen, refreshPosts: () => refreshPosts() });

  const navigateSettings = () => navigation.navigate('Settings');

  const displayPostOptions = async (id, type, allowMessages) => {
    try {
      let author = false;
      let authored = await AsyncStorage.getItem('@neighbourly_authored');
      if (authored) {
        authored = JSON.parse(authored);
        author = authored.includes(id);
      }
      setPostOptions({ visible: true, author, id, type, allowMessages });
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      console.error(err);
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(postOptions.id, postOptions.type);
      setPostOptions({ ...postOptions, visible: false });
      refreshPosts();
    } catch (err) {
      setPostOptions({ ...postOptions, visible: false });
      console.error(err);
    }
  };

  const hidePost = async () => {
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
      console.error(err);
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar navigateSettings={navigateSettings} />
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
      <Modal visible={postOptions.visible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.optionsContainer}>
            {postOptions.author ? (
              <View>
                {postOptions.type === 'favor' && (
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.optionButton}>Resolved</Text>
                    <View style={styles.lineBreak}></View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={handleDeletePost} activeOpacity={0.6}>
                  <Text style={styles.optionButton}>Delete</Text>
                  <View style={styles.lineBreak}></View>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                {postOptions.allowMessages && (
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.optionButton}>Send message</Text>
                    <View style={styles.lineBreak}></View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={hidePost} activeOpacity={0.6}>
                  <Text style={styles.optionButton}>Hide this post</Text>
                  <View style={styles.lineBreak}></View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.optionButton}>Report</Text>
                  <View style={styles.lineBreak}></View>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.cancelContainer}>
              <TouchableOpacity
                onPress={() => setPostOptions({ ...postOptions, visible: false })}
                activeOpacity={0.6}
              >
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    opacity: 0.1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  optionsContainer: {
    width: '65%',
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  optionButton: {
    fontSize: 20
  },
  lineBreak: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 5
  },
  cancelContainer: {
    flex: 0,
    alignItems: 'flex-end',
    marginTop: 15,
    marginBottom: -7
  },
  cancelText: {
    fontSize: 14
  }
});
