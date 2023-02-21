import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

test('the menu item is displayed', () => {
    render(<MenuItem href="contact">Contact</MenuItem>);

    const item = screen.getByRole('link', {
        name: /contact/i
    });

    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('href', '/contact');
});