import { IProduct } from '../_interfaces/product';
import cocaCola from '@/app/_assets/images//regri/coca-cola-2L.png';
import cocaColaZero from '@/app/_assets/images/regri/coca-cola-0-2L.png';
import DollyOrange from '@/app/_assets/images/regri/dolly-laranja-2L.png';
import guarana from '@/app/_assets/images/regri/guarana-2L.png';

export const sodas: IProduct[] = [
  {
    title: 'Coca Cola',
    ingredients: 'Coca Cola 2 Litros ',
    price: 13.99,
    image: cocaCola,
    discountPercent: 0,
    type: 'refrigerante',
    slug: 'coca-cola-2-litros',
  },
  {
    title: 'Coca Cola Zero 2 Litros',
    ingredients: 'Coca Cola Zero açúcar ',
    price: 13.99,
    image: cocaColaZero,
    discountPercent: 0,
    type: 'refrigerante',
    slug: 'refrigerante-coca-cola-zero-2-litros',
  },
  {
    title: 'Dolly Laranja 2 Litros',
    ingredients: 'Dolly Laranja 2 Litros',
    price: 8.99,
    image: DollyOrange,
    discountPercent: 0,
    type: 'refrigerante',
    slug: 'refrigerante-dolly-laranja-2-litros',
  },
  {
    title: 'Fanta Laranja 2 Litros',
    ingredients: 'Refrigerante Fanta Uva 2 Litros',
    price: 8.99,
    image: DollyOrange,
    discountPercent: 0,
    type: 'refrigerante',
    slug: 'refrigerante-fanta-laranja-2-litros',
  },
  {
    title: 'Guaraná Antartica 2 Litros',
    ingredients: 'Refrigerante Guaraná Antartica 2 Litros',
    price: 9.99,
    image: guarana,
    discountPercent: 0,
    type: 'refrigerante',
    slug: 'refrigerante-guarana-antartica-2-litros',
  },
];
