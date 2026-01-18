'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ILink } from '../_interfaces/links';

interface NavbarMainProps {
  links: ILink[];
}
const NavbarMain = ({ links }: NavbarMainProps) => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (path: string) => path === pathname;
  return (
    <nav className="flex flex-col gap-y-2.5 pl-5 lg:flex-row lg:gap-7">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`font-poppins flex items-center gap-6 tracking-wider transition-colors duration-300 ease-in-out hover:text-neutral-400 lg:gap-2`}
        >
          <link.Icon
            className={`${isActive(link.path) ? 'scale-150 font-black text-yellow-500' : 'text-lg text-neutral-200'}`}
          />
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarMain;
