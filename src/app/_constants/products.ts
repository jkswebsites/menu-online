import imgPizza from '@/app/_assets/images/pizza/pizza-mussarela.png';
import { IProduct } from '../_interfaces/product';

export const pizzas: IProduct[] = [
  {
    title: 'Mussarela Grande 8 pedaços',
    ingredients:
      'Massa de Pizza, Molho de Tomate Caseiro, Azeitona, Oregano, Mussarela',
    price: 59.99,
    image: imgPizza,
    discountPercent: 33,
  },
];
