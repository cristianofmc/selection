import Link from 'next/link';

const LinkRenderer = ({ href, className = '', children }) => (
    <Link
        href={href}
        className={`${className} text-sky-700 hover:text-blue-800 dark:text-sky-500 dark:hover:text-sky-400`}
        target="_blank"
        rel="noreferrer"
    >
        {children}
    </Link>
);

export default LinkRenderer;
