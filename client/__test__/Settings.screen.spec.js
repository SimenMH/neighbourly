import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Settings from '../screens/settings/Settings.screen';

describe('Settings screen tests', () => {

  it('should check if Settings screen is being rendered', () => {
    const navigation = {};
    navigation.navigate = jest.fn();
    const { getByTestId } = render(<Settings navigation={navigation}/>);
    // const settings = getByText('Settings');
    const settings = getByTestId('settings__text');
    expect(settings).not.toBeUndefined();
  });

  it('should check if addItems, removeItems and getItems works for resetHiddenPosts() using AsyncStorage', async () => {

    const navigation = {};
    navigation.navigate = jest.fn();
    await AsyncStorage.setItem('@neighbourly_hidden', 'Test1');
    const getItemsFromAsyncStorage = await AsyncStorage.getItem('@neighbourly_hidden');
    expect(getItemsFromAsyncStorage).not.toBeNull();

    const { getByTestId } = render(<Settings navigation={navigation}/>);
    // const resetHiddenPosts = jest.fn();
    
  	const resetPostsBtn = getByTestId('Reset Hidden Posts');
    fireEvent.press(resetPostsBtn);

    expect(AsyncStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('@neighbourly_hidden');

    const getItemsFromAsyncStorage02 = await AsyncStorage.getItem('@neighbourly_hidden');
    expect(getItemsFromAsyncStorage02).toBeNull();
    // debug();
  });

  it('should check if backButton is rendered properly', () => {
    const navigation = {};
    navigation.navigate = jest.fn();
    const { getByTestId } = render(<Settings navigation={navigation}/>);
    const backButton = getByTestId('backButton000');
    expect(backButton.props.style.opacity).toBe(1);
  });
});