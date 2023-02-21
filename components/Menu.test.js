import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('shows menu with menu items', () => {
    const menuItems = [
        { name: 'projects', href: ''},
        { name: 'about', href: 'about'},
        { name: 'contact', href: 'contact'}
    ]

    render(<Menu items={menuItems}/>);

    for (let item of menuItems){
        const link = screen.getByRole('link', { name: new RegExp(`${item.name}`)});

        expect(link).toHaveAttribute('href', `/${item.href}`);
    }

    const links = screen.getAllByRole('link');
    
    expect(links).toHaveLength(3);
});