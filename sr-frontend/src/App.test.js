import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {

  beforeEach(() => {
    render(
      <App />
    )
  });

  test('It renders the Title', () => {
    expect(screen.getByText('SoulRadio')).toBeInTheDocument();
  });

  test('It renders the Login button', () => {
    expect(screen.getByRole('link')).toHaveTextContent("Login");
  });
})