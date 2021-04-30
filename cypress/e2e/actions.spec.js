import React from 'react';
import { Text, View } from 'react-native';
import {
  render,
  fireEvent,
  waitFor,
  screen
} from '@testing-library/react-native';
import LocationPicker from '../../client/screens/location-picker';
import verifyPermissions from '../../client/screens/location-picker';

describe('LocationPicker component', () => {
  beforeEach(() => {
    cy.visit('url goes here');
  });
  it('verifies permissions', () => {});
});
