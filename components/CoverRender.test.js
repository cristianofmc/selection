import { getByRole, render, screen } from '@testing-library/react';
import CoverRender from './CoverRender';

test('cover render an image from github repository', () =>{
    const props = {
        content: { html_url: 'https://github.com/cristianofmc/selection' },
        width: '672',
        height: '342'
    }

    render(<CoverRender width={props.width} height={props.height}>{props.content}</CoverRender>);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
});
