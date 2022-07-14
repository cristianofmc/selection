const MenuItem = (props) => {
    return(
        <a class="group inline-flex items-center px-5 md:text-md  md:h-10 h-7 text-sm rounded-full font-semibold whitespace-nowrap focus:outline-none focus:ring-2 bg-neutral-100 mt-8"
        href={`/${props.href}`}>
        {props.children}
        </a>
    );
};

export default MenuItem;