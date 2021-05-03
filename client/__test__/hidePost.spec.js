import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { screen } from '@testing-library/dom';

import PostList from '../components/post-list/PostList.component';
import PostOptions from '../components/post-options/PostOptions.component';
import Main from '../screens/main/Main.screen';
import Post from '../components/post/Post.component';

describe('Post', () => {
  it('should render a modal', async () => {
    const handlePostOptions = jest.fn();
    const props = { handlePostOptions, type: 'favor', post: {}, color: '' };
    //render(<Main />);
    //const postOptions = await screen.findByTestId('options');
    //console.log('postOptions.firstChild :>> ', postOptions);
    const postRender = render(<Post {...props} />); 
    const button = await postRender.findByTestId('options');
    //console.log('button :>> ', button);
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
    const hidePost = jest.fn();
    const props = { postOptions: { visible: true }, hidePost };
    const postOptionsRender = render(<PostOptions {...props} />);
    const optionButton = postOptionsRender.getByText('Hide this post');
    fireEvent.press(optionButton);
    expect(hidePost).toHaveBeenCalledTimes(1);
  });
});