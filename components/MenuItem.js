'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem = ({ href, children }) => {
  const pathname = usePathname();
  const normalizedHref = href.startsWith('/') ? href : `/${href}`;
  const isActive = pathname === normalizedHref;

  return (
    <li>
      <Link
        href={normalizedHref}
        aria-current={isActive ? 'page' : undefined}
        className="group inline-flex items-center tracking-wider px-5 md:text-md 
          focus:ring-1 focus:ring-neutral-300 border border-transparent
          dark:hover:border-topic-border-dark-grey dark:bg-button-hero-black dark:focus:ring-0
          hover:border-neutral-300 
          md:h-10 h-7 text-sm rounded-full font-semibold leading-5 whitespace-nowrap bg-black bg-opacity-[.08] mt-8"
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
