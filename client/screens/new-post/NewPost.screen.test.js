import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NewPost from '../../screens/new-post/NewPost.screen';

jest.mock('react-native-calendar-picker', () => 'CalendarPicker');

describe.only('NewPost component', () => {
  const route = {};
  const navigation = {};
  beforeEach(() => {
    route.params = {
      type: 'event'
    };
    navigation.goBack = jest.fn();
  });
  it('navigates back to last page', () => {
    const { getByTestId } = render(
      <NewPost navigation={navigation} route={route} />
    );
    const targetComponent = getByTestId('btn-back-icon');
    fireEvent.press(targetComponent);
    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
