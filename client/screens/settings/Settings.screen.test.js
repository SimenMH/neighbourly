import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from './Settings.screen';

describe('Settings component', () => {
  const navigation = {};
  let getByText, getByTestId, debug;
  beforeEach(() => {
    navigation.navigate = jest.fn();
    const renderedComponent = render(<Settings navigation={navigation} />);
    getByText = renderedComponent.getByText;
    getByTestId = renderedComponent.getByTestId;
    debug = renderedComponent.debug;
  });
  it('should say Change Location', () => {
    const textComponent = getByText('Change Location').props.children;
    expect(textComponent).toBe('Change Location');
  });
  test('navigates to LocationPicker screen component', () => {
    fireEvent.press(getByText('Change Location'));
    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('LocationPicker');
  });
  it('should say Reset HIdden Posts', () => {
    const targetComponent = getByText('Reset Hidden Posts');
    expect(targetComponent).not.toBe(undefined);
  });
  // TODO: test resetHiddenPosts
  test('resets hidden posts', () => {
    const targetComponent = getByTestId('Reset Hidden Posts');
    fireEvent.press(targetComponent);
    debug();
  });
});
