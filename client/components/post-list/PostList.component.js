import React, { useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import Post from '../post/Post.component';

export default function PostList(props) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    props.handleRefresh(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.posts}
        renderItem={({ item }) => <Post post={{ ...item }} type={props.type} />}
        keyExtractor={post => post._id}
        style={{ minWidth: '100%' }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 100
  }
});
