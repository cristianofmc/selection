import { render, screen } from '@testing-library/react';
import { tabbable } from '../test/__mock__/tabbable';
import Modal from './Modal';

test('the modal is displayed', () => {
    const modalData = {
        name: 'selection',
        description: "Selection is an it's a minimalist portfolio concept, straight to the point, consuming resources already available on Github in a smart approach.",
        topics: [
            "javascript",
            "nextjs",
            "react",
            "selection",
            "tailwindcss"
        ],
        html_url: 'https://github.com/cristianofmc/selection',
        default_branch: 'main'
    }

    render(<Modal visible='true' onCloser={() =>{}} modalData={modalData}/>);

    const link = screen.getByRole('link');
    console.log(link.length);
});