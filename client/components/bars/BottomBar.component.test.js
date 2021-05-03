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
  test('home icon image opacity should be at 1', () => {
    const destinationScreen = 'home';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('homeIcon');
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('home icon image opacity should be at 0.5', () => {
    const destinationScreen = 'favor';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('homeIcon');
    expect(imageComponent.props.style.opacity).toBe(0.5);
  });
  test('notice icon image opacity should be at 1', () => {
    const destinationScreen = 'notice';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('noticeIcon');
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('notice icon image opacity should be at 0.5', () => {
    const destinationScreen = 'favor';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('noticeIcon');
    expect(imageComponent.props.style.opacity).toBe(0.5);
  });
  test('event icon image opacity should be at 1', () => {
    const destinationScreen = 'event';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('eventIcon');
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test('event icon image opacity should be at 0.5', () => {
    const destinationScreen = 'favor';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('eventIcon');
    expect(imageComponent.props.style.opacity).toBe(0.5);
  });
  test('favor icon opacity should be at 1', () => {
    const destinationScreen = 'favor';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('favorIcon');
    expect(imageComponent.props.style.opacity).toBe(1);
  });
  test.only('favor icon image opacity should be at 0.5', () => {
    const destinationScreen = 'home';
    const renderedComponent = render(<BottomBar screen={destinationScreen} />);
    const imageComponent = renderedComponent.getByTestId('favorIcon');
    expect(imageComponent.props.style.opacity).toBe(0.5);
  });
});
