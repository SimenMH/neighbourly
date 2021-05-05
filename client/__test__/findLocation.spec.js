import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { screen } from '@testing-library/dom';

import LocationPicker from '../screens/location-picker/LocationPicker.screen';
import Settings from '../screens/settings/Settings.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('expo-location');
jest.mock('@react-native-async-storage/async-storage');

describe('Location', () => {
  
  it('find the location', async () => {
    const props = { navigation: {} };
    const locationPickerRender = render(<LocationPicker {...props} />);
    const findButton = locationPickerRender.getByText('Find my location');
    const confirmButton = locationPickerRender.getByText('Confirm');
    fireEvent.press(findButton);
    fireEvent.press(confirmButton);
    const location = await AsyncStorage.getItem('@neighbourly_location');
    expect(location).toBeTruthy();
  });

});
