import type { Metadata } from 'next';
import { CartContextProvider } from '../context/contextCart';
import HeaderMain from '../_components/header-main';
import NavFooter from '../_components/nav-footer';

export const metadata: Metadata = {
  title: 'Don Roman Pizzaria | Home',
  description: 'Seu cardápio online 24 horas por dia',
};

export default function RootLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <CartContextProvider>
        <HeaderMain />
        {children}
        <NavFooter />
      </CartContextProvider>
    </div>
  );
}
