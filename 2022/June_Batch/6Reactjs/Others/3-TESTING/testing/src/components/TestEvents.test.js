import React from 'react';
import TestEvents from './TestEvents';
import { render, cleanup,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);



it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });
