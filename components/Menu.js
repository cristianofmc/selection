import Link from 'next/link';

const Menu = (props) => {
    return(
        <header className="mt-6 sm:mt-10">
            <nav>
                <ul className="flex justify-center gap-x-6 whitespace-nowrap flex-wrap">
                    {props.children}
                </ul>
            </nav>
        </header>
    );
};

export default Menu;

