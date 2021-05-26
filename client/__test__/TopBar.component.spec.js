import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TopBar  from '../components/bars/TopBar.component';

describe('TopBar Component tests', () => {

  it('renders Topbar content', () => {
	
    const { getByText } = render(<TopBar />);
    expect(getByText(/neighbourly/i)).not.toBeNull();

  });

  it('renders appropriate touchabaleOpacity content', () => {

    const { getByTestId } = render(<TopBar />);
    const btn = getByTestId('topbar__btn');
    expect(btn.props.style.position).toBe('absolute');
    expect(btn.props.style.height).toBe(30);

  });
  
  it('calls function associated with touchabaleOpacity click event', () => {
    
    const navigateSettings = jest.fn();
    const { getByTestId } = render(<TopBar navigateSettings={navigateSettings}/>);
    const btn = getByTestId('topbar__btn');
    expect(btn.props.style.position).toBe('absolute');
    expect(btn.props.style.height).toBe(30);
    fireEvent.press(btn);
    expect(navigateSettings).toHaveBeenCalledTimes(1);
    
  });

  it('renders image properly', () => {

    const { getByTestId } = render(<TopBar />);
    const img = getByTestId('topbar__img');
    expect(img.props.style.width).toBe('100%');
    expect(img.props.style.height).toBe('100%');

  });

});

