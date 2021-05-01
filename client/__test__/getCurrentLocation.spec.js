import React from 'react';
import { Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
//import LocationPicker from '../screens/location-picker/LocationPicker.screen';
//import {verifyPermissions} from '../../client/screens/location-picker/LocationPicker.screen';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomBar from '../components/bars/BottomBar.component';
//describe.only('LocationPicker component', () => {
//  beforeEach(() => {
//    cy.visit('url goes here');
//  });
//  it('it verifies permissions', async () => {
//    const getCurrentLocation = jest.fn();
//    const { getByTestId, queryByTestId, getByText } = render(
//      <LocationPicker />
//    );
//    const storage = {};
//    const button = getByText('Pick location on map');
//    fireEvent.press(button);
//    storage['@neighbourly_location'] = 'myLocation';
//    await waitFor(() => expect(storage['@neighbourly_location']).toBeTruthy());
//  });
//});

it('should render', () => {
  const { getByTestId, queryByTestId, getByText } = render(<BottomBar />);
  const t = renderer.create(<BottomBar />).toJSON();
  console.log('t :>> ', t);
});
