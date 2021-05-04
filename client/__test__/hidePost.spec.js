import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { screen } from '@testing-library/dom';

import PostList from '../components/post-list/PostList.component';
import PostOptions from '../components/post-options/PostOptions.component';
import Main from '../screens/main/Main.screen';
import Post from '../components/post/Post.component';
import Settings from '../screens/settings/Settings.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage');

describe('Post', () => {
  it('should open a modal', async () => {
    const handlePostOptions = jest.fn();
    const props = { handlePostOptions, type: 'favor', post: {}, color: '' };
    const postRender = render(<Post {...props} />);
    const button = await postRender.findByTestId('options');
    fireEvent.press(button);
    expect(handlePostOptions).toHaveBeenCalledTimes(1);
  });

  it('should hide the modal', async () => {
    const setPostOptions = jest.fn();
    const props = { postOptions: { visible: true }, setPostOptions };
    const postOptionsRender = render(<PostOptions {...props} />);
    const button = await postOptionsRender.findByText('CANCEL');
    fireEvent.press(button);
    expect(setPostOptions).toHaveBeenCalledTimes(1);
  });

  it('should hide a post', async () => {
    const hidePost = jest.fn(async () => {
      await AsyncStorage.setItem('@neighbourly_hidden', ['postID']);
    });
    const props = { postOptions: { visible: true }, hidePost };
    const postOptionsRender = render(<PostOptions {...props} />);
    const button = postOptionsRender.getByText('Hide this post');
    fireEvent.press(button);
    const hiddenPosts = await AsyncStorage.getItem('@neighbourly_hidden');
    expect(hidePost).toHaveBeenCalledTimes(1);
    expect(hiddenPosts.length).toBe(1);
  });

  it('should show all the posts', async () => {
    const showPosts = jest.fn(async () => {
      await AsyncStorage.removeItem('@neighbourly_hidden');
    });
    //await AsyncStorage.setItem('@neighbourly_hidden', ['postID']);
    const settingsRender = render(<Settings />);
    const button = settingsRender.getByText('Reset Hidden Posts');
    fireEvent.press(button, showPosts);
    const posts = await AsyncStorage.getItem('@neighbourly_hidden');
    console.log('Object.keys(button) :>> ', Object.keys(button));
    console.log('button.props :>> ', button.props);
    console.log('button.updater :>> ', button.updater);
    //expect(showPosts).toHaveBeenCalledTimes(2);
  });
});
