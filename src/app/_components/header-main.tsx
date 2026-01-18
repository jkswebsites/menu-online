'use client';
import { linksNav } from '../constants/nav-links';
import LogoMain from './logo-main';
import NavbarMain from './navbar-main';
import NavbarSheet from './navbar-sheet';

const HeaderMain = () => {
  return (
    <header className="bg-background fixed flex h-16 w-full flex-row-reverse items-center justify-between px-3 lg:flex-row lg:justify-start">
      <div className="mx-9">
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
