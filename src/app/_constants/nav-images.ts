import { ILinkNav } from '../_interfaces/slide-image';
import imgPizzaCooking from '@/app/_assets/images/pizza/no-bg-pizza.png';
import imgPizzaChoc from '@/app/_assets/images/no-bg/pizza-choc-no-bg.png';
import imgHumbuger from '@/app/_assets/images/no-bg/buger/humbuger-no-bg.png';
import imgPastel from '@/app/_assets/images/no-bg/pastel-no-bg.png';

export const navImages: ILinkNav[] = [
  {
    name: 'Pizza',
    src: imgPizzaCooking,
    path: '/pages/category/pizza',
    description: 'Pizza de mussarela',
  },
  {
    name: 'Pizza Doce',
    src: imgPizzaChoc,
    path: '/',
    description: 'Pizza de Chocolate',
  },
  {
    name: 'Humbuger',
    src: imgHumbuger,
    path: '/pages/category/hamburguer',
    description: 'Humbuger',
  },
  {
    name: 'Pastel',
    src: imgPastel,
    path: '/',
    description: 'Pastel diversos sabores',
  },
];
