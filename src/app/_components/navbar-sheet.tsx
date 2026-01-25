'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { IoMenu } from 'react-icons/io5';
import { linksNav } from '../_constants/nav-links';
import Link from 'next/link';
import { useActiveLink } from '@/hooks/useIsActive';

const NavbarSheet = () => {
  const { isActive } = useActiveLink();
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <IoMenu className="text-3xl" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Confira nossa opções</SheetTitle>
          <SheetDescription>
            Confira nosso cardápio por categoria, temos uma ampla variedades de
            sabores para sua fome
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-y-2.5 pl-5">
          {linksNav.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                href={link.path}
                className={`font-poppins flex items-center gap-6 tracking-wider transition-colors duration-300 ease-in-out hover:text-neutral-400 lg:gap-2`}
              >
                <link.Icon
                  className={`${isActive(link.path) ? 'scale-150 font-black text-yellow-500' : 'text-lg text-neutral-200'}`}
                />
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
