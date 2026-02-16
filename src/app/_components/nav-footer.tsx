'use client';
import ButtonWhats from './buttons-whats';
import SheetCart from './sheet-cart';

const NavFooter = () => {
  const messageWhats = `
            Olá, vim pelo Cardápio Digital!
            Gostaria de mais informações...
        `;
  return (
    <footer className="fixed bottom-0 flex h-12.5 w-full items-center justify-between px-4 py-2">
      <ButtonWhats phone="5511941515753" message={messageWhats} />
      <SheetCart />
    </footer>
  );
};

export default NavFooter;
