import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Technology from './Technology';

describe('<Technology />', () => {
  test('it should mount', () => {
    render(<Technology />);
    
    const technology = screen.getByTestId('Technology');

    expect(technology).toBeInTheDocument();
  });
});