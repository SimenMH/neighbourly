import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from '../settings/Settings.screen';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe('Settings component', () => {
  test.only('navigates to LocationPicker scren component', () => {
    const navigation = {};
    navigation.navigate = jest.fn();
    const { getByText } = render(<Settings navigation={navigation} />);
    fireEvent.press(getByText('Change Location'));
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
