import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from '../settings/Settings.screen';
import Main from '../../screens/main/Main.screen';

describe('Settings component', () => {
  test('navigates to LocationPicker screen component', () => {
    const navigation = {};
    navigation.navigate = jest.fn();
    const { getByText } = render(<Settings navigation={navigation} />);
    fireEvent.press(getByText('Change Location'));
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
