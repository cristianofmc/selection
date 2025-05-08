'use client';

import { usePathname } from 'next/navigation';
import MenuItem from "../components/MenuItem";

const Menu = ({ items }) => {
  const pathname = usePathname();

  return (
    <header className="mt-6 sm:mt-10">
      <nav>
        <ul className="flex justify-center gap-x-6 whitespace-nowrap flex-wrap">
          {items.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.name}
            </MenuItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
