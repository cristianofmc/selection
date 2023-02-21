import { render, screen } from '@testing-library/react';
import LinkRenderer from './LinkRender';

test('Link element is displayed', () => {
    const props = {
        href: 'https://github.com/cristianofmc/',
        className: 'mr-4',
        content: 'github'
    }

    render(<LinkRenderer href={props.href} className={props.className}>{props.content}</LinkRenderer>);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveClass(props.className);
});

test('Link element is displayed without class argument', () => {
    const props = {
        href: 'https://github.com/cristianofmc/',
        content: 'github'
    }

    render(<LinkRenderer href={props.href}>{props.content}</LinkRenderer>);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.href);
    expect(link).not.toHaveClass('undefined');
});