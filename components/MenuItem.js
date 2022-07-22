import Link from 'next/link';

const MenuItem = (props) => {
    return(
        <Link href={`/${props.href}`}>
            <a class="group inline-flex items-center px-5 md:text-md  md:h-10 h-7 text-sm rounded-full font-semibold whitespace-nowrap focus:outline-none focus:ring-2 bg-neutral-100 mt-8">
                {props.children}
            </a>
        </Link>
    );
};

export default MenuItem;