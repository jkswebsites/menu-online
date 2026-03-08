import type { Metadata } from 'next';
import { Roboto, Poppins, Oxygen } from 'next/font/google';
import './globals.css';
import { CartContextProvider } from './context/contextCart';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['100', '200', '400', '700'],
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '500', '900'],
  subsets: ['latin'],
});

const oxygen = Oxygen({
  variable: '--font-oxygen',
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Meu Cardápio Digital | Home',
  description: 'Seu cardápio Digital 24 horas por dia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${oxygen.variable} dark antialiased`}
      >
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
