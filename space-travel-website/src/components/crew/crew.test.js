import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Crew from './Crew';

describe('<Crew />', () => {
  test('it should mount', () => {
    render(<Crew />);
    
    const crew = screen.getByTestId('Crew');

    expect(crew).toBeInTheDocument();
  });
});