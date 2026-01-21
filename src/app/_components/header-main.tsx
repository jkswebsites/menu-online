'use client';
import { linksNav } from '../_constants/nav-links';
import LogoMain from './logo-main';
import NavbarMain from './navbar-main';
import NavbarSheet from './navbar-sheet';

const HeaderMain = () => {
  return (
    <header className="fixed z-50 flex h-16 w-full flex-row-reverse items-center justify-between bg-linear-to-b from-neutral-900 from-80% to-transparent pl-3 lg:flex-row lg:justify-start">
      <div className="mr-4">
        <LogoMain />
      </div>
      <div className="lg:hidden">
        <NavbarSheet />
      </div>
      <div className="hidden lg:block">
        <NavbarMain links={linksNav} />
      </div>
    </header>
  );
};

export default HeaderMain;
