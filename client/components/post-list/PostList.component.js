import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Post from '../post/Post.component';
import { POSTS } from './mock-data';

export default function PostList (props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        renderItem={Post}
        keyExtractor={post => post.id}
        contentContainerStyle={{ paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 100,
  },
});