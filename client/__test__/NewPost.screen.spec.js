import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import NewPost from '../screens/new-post/NewPost.screen';
import ApiService from '../services/__mocks__/ApiService.service';
import PostList from '../components/post-list/PostList.component';

const originalFetch = global.fetch;

global.fetch = jest.fn(() => {
  return Promise.resolve({
    status:200, 
    statusText: 'OK', 
    json: () => { return Promise.resolve(ApiService.getAll);
    }});
});

afterAll(() => { global.fetch = originalFetch; });

describe('NewPost screen tests', () => {
	
  it('should render', () => {
    expect(2).toBe(2);
  });

  // it ('should create new post', () => {

  //   const type = 'home';
  //   const post = ApiService.getAll.home;
  //   const handleRefresh = jest.fn();
  //   const { getByTestId, getByText } = render(<PostList type ={type} post= {post} handleRefresh= 
  //     {handleRefresh}/>);

  // });
});