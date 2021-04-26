import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';

import Post from '../post/Post.component';

export default function PostList(props) {
  let refreshing = false;

  const onRefresh = () => {
    refreshing = true;
    props.handleRefresh();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.posts}
        renderItem={({ item }) => (
          <Post
            post={{ ...item }}
            type={props.type}
            handlePostOptions={(id, type, allowMessages) => props.handlePostOptions(id, type, allowMessages)}
          />
        )}
        keyExtractor={post => post._id}
        style={{ minWidth: '100%' }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />}
      />
    </View>
  );
}
