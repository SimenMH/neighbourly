import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomBar from '../../components/bars/BottomBar.component';

describe('BottomBar component', () => {
  const changeScreen = jest.fn();
  const navigateNewPost = jest.fn();
  const goTo = jest.fn((screen) => changeScreen(screen));
  test('goes to home screen', () => {
    const testID = 'home';
    const BottomBarComp = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(testID)}
        screen={testID}
      />
    );
    fireEvent.press(BottomBarComp.getByTestId(testID));
    expect(changeScreen).toHaveBeenCalledWith(testID);
  });
  test('goes to notice screen', () => {
    const testID = 'notice';
    const BottomBarComp = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(testID)}
        screen={testID}
      />
    );
    fireEvent.press(BottomBarComp.getByTestId(testID));
    expect(changeScreen).toHaveBeenCalledWith(testID);
  });
  test('goes to notice event', () => {
    const testID = 'event';
    const BottomBarComp = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(testID)}
        screen={testID}
      />
    );
    fireEvent.press(BottomBarComp.getByTestId(testID));
    expect(changeScreen).toHaveBeenCalledWith(testID);
  });
  test('goes to notice favor', () => {
    const testID = 'favor';
    const BottomBarComp = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(testID)}
        screen={testID}
      />
    );
    fireEvent.press(BottomBarComp.getByTestId(testID));
    expect(changeScreen).toHaveBeenCalledWith(testID);
  });
  test('navigates to new post', () => {
    const navigateNewPost = jest.fn();
    const testID = 'navigateNewPost';
    const destinationScreen = 'favor';
    const BottomBarComp = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(destinationScreen)}
        screen={destinationScreen}
      />
    );
    fireEvent.press(BottomBarComp.getByTestId(testID));
    expect(changeScreen).toHaveBeenCalledWith(destinationScreen);
    expect(navigateNewPost).toHaveBeenCalledTimes(1);
  });
  test('home screen image opacity should be at 1', () => {
    const destinationScreen = 'home';
    const testID = destinationScreen;
    const renderedComponent = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(destinationScreen)}
        screen={destinationScreen}
      />
    );
    fireEvent.press(renderedComponent.getByTestId(testID));
    const imageComponent = renderedComponent.getByTestId(testID);
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('notice screen image opacity should be at 1', () => {
    const destinationScreen = 'notice';
    const testID = destinationScreen;
    const renderedComponent = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(destinationScreen)}
        screen={destinationScreen}
      />
    );
    fireEvent.press(renderedComponent.getByTestId(testID));
    const imageComponent = renderedComponent.getByTestId(testID);
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('event screen image opacity should be at 1', () => {
    const destinationScreen = 'event';
    const testID = destinationScreen;
    const renderedComponent = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(destinationScreen)}
        screen={destinationScreen}
      />
    );
    fireEvent.press(renderedComponent.getByTestId(testID));
    const imageComponent = renderedComponent.getByTestId(testID);
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('favor screen image opacity should be at 1', () => {
    const destinationScreen = 'favor';
    const testID = destinationScreen;
    const renderedComponent = render(
      <BottomBar
        navigateNewPost={() => navigateNewPost()}
        changeScreen={() => goTo(destinationScreen)}
        screen={destinationScreen}
      />
    );
    fireEvent.press(renderedComponent.getByTestId(testID));
    const imageComponent = renderedComponent.getByTestId(testID);
    expect(imageComponent.props.style.opacity).toBe(1);
  });
});
