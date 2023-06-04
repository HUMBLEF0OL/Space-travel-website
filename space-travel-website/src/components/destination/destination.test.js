import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Destination from './Destination';

describe('<Destination />', () => {
  test('it should mount', () => {
    render(<Destination />);
    
    const destination = screen.getByTestId('Destination');

    expect(destination).toBeInTheDocument();
  });
});