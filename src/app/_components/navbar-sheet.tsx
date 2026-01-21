import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoMenu } from 'react-icons/io5';
import NavbarMain from './navbar-main';
import { linksNav } from '../_constants/nav-links';

const NavbarSheet = () => {
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
        <NavbarMain links={linksNav} />
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
