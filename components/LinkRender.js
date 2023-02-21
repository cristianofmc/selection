const LinkRenderer = (props) => {

    return (
        <a href={props.href} className={`${props.className ? props.className : ''} text-sky-700 hover:text-blue-800 dark:text-sky-500 dark:hover:text-sky-400`} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
};

export default LinkRenderer;