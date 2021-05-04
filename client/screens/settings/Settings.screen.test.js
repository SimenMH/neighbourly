import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from './Settings.screen';

describe('Settings component', () => {
  test('navigates to LocationPicker screen component', () => {
    const navigation = {};
    navigation.navigate = jest.fn();
    const { getByText } = render(<Settings navigation={navigation} />);
    fireEvent.press(getByText('Change Location'));
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
