import imgPizzaMuss from '@/app/_assets/images/pizza/pizza-mussarela.png';
import imgPizzaCala from '@/app/_assets/images/pizza/pizza-calabresa.png';
import imgPizzaFog from '@/app/_assets/images/pizza/pizza-forno.png';
import imgPizzaChic from '@/app/_assets/images/pizza/pizza-chicken.png';
import imgPizza4Ches from '@/app/_assets/images/pizza/pizza-4-queijos.png';
import imgPizzaDoritos from '@/app/_assets/images/pizza/pizza-doritos.png';
import { IProduct } from '../_interfaces/product';

export const pizzas: IProduct[] = [
  {
    title: 'Mussarela Grande 8 pedaços',
    ingredients:
      '🍕 Massa de Pizza, ​🍅​ Molho de Tomate Caseiro, ​🟢 Azeitona, ​🧂​ Oregano, 🧀​ Mussarela',
    price: 59.99,
    image: imgPizzaMuss,
    discountPercent: 33,
    type: 'pizza',
    slug: 'pizza-mussarela',
  },
  {
    title: 'Calabresa Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 49.99,
    image: imgPizzaCala,
    discountPercent: 33,
    type: 'pizza',
    slug: 'pizza-calabresa',
  },
  {
    title: '4 Queijos Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 50,
    image: imgPizzaChic,
    discountPercent: 50,
    type: 'pizza',
    slug: 'pizza-4-queijos',
  },
  {
    title: 'Frango com catupry Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 50,
    image: imgPizza4Ches,
    discountPercent: 50,
    type: 'pizza',
    slug: 'pizza-frango-catupry',
  },
  {
    title: 'Doritos Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 50,
    image: imgPizzaDoritos,
    discountPercent: 50,
    type: 'pizza',
    slug: 'pizza-doritos',
  },
  {
    title: 'Margaritta Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 50,
    image: imgPizzaFog,
    discountPercent: 50,
    type: 'pizza',
    slug: 'pizza-margaritta',
  },
];
