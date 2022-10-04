import Link from 'next/link';

const MenuItem = (props) => {
    return(
        <li>
            <Link href={`/${props.href}`}>
                <a className="group inline-flex items-center tracking-wider px-5 md:text-md 
                focus:ring-1 focus:ring-neutral-300 border border-transparent
                dark:hover:border-topic-border-dark-grey dark:bg-button-hero-black dark:focus:ring-0
                hover:border-neutral-300 
                md:h-10 h-7 text-sm rounded-full font-semibold leading-5 whitespace-nowrap bg-black bg-opacity-[.08] mt-8">
                    {props.children}
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;