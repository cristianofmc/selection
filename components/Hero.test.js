import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('Hero sectiion with the title shoud be visible', () => {
    const titleString = 'selection';
    render(<Hero>{titleString}</Hero>);

    const title = screen.getByRole('heading', {
        name: titleString
    });

    expect(title).toBeInTheDocument();
});