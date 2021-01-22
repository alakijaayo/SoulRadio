import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {

    beforeEach(() => {
        render(
            <Header />
        )
    })

    test('Title is rendered in the logo', () => {
        expect(screen.getByText('SoulRadio')).toBeInTheDocument();
    });

    test('It renders the Login button', () => {
        expect(screen.getByRole('link')).toHaveTextContent("Login");
      });
})