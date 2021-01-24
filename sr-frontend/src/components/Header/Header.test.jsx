import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {

    beforeEach(() => {
        render(
            <Header />
        )
    })

    test('Title is rendered in the header', () => {
        expect(screen.getByRole('heading')).toHaveTextContent("SoulRadio");
    });

    test('It renders the Login button', () => {
        expect(screen.getByRole('link')).toHaveTextContent("Login");
    });

    test('It renders the avatar', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument();
    })
})