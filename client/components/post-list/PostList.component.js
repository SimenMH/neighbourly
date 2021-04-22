import React, { useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import Post from '../post/Post.component';
import { POSTS } from './mock-data';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function PostList (props) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {setRefreshing(false)}, 2000)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        renderItem={Post}
        keyExtractor={post => post.id}
        contentContainerStyle={{ paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
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





// const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => {setRefreshing(false)}, 2000)
//   };


// refreshControl={
//   <RefreshControl
//     refreshing={refreshing}
//     onRefresh={() => onRefresh()}
//   />
// }