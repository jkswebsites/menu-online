import { IProduct } from '../_interfaces/product';
import imgBuger01 from '@/app/_assets/images/no-bg/buger/humbuger-no-bg.png';
import imgBuger02 from '@/app/_assets/images/no-bg/buger/buger-chedder-no-bg.png';
import imgBuger03 from '@/app/_assets/images/no-bg/buger/buger-bacon-cheddar-no-bg-removebg-preview.png';
import imgBuger04 from '@/app/_assets/images/no-bg/buger/buger-chicken-removebg-preview.png';
import imgBuger05 from '@/app/_assets/images/no-bg/buger/buger-vegano-removebg-preview.png';

export const hamburguers: IProduct[] = [
  {
    image: imgBuger01,
    title: 'Celebrate Supreme',
    ingredients: 'Pão de Hambúguer, Carne Grelhada, Alface, Tomate',
    price: 29.99,
    discountPercent: 5,
    type: 'hamburguer',
    slug: 'celebrate-supreme-hambuger',
  },
  {
    image: imgBuger02,
    title: 'Double Cheese',
    ingredients: 'Pão de Hambúguer, Carne Grelhada, Alface, Tomate',
    price: 29.99,
    discountPercent: 5,
    type: 'hamburguer',
    slug: 'double-cheese-hambuger',
  },
  {
    image: imgBuger03,
    title: 'Double Bacon',
    ingredients: 'Pão de Hambúguer, Carne Grelhada, Alface, Tomate',
    price: 29.99,
    discountPercent: 5,
    type: 'hamburguer',
    slug: 'double-bacon-hambuger',
  },
  {
    image: imgBuger04,
    title: 'Ligth Chicken',
    ingredients: 'Pão de Hambúguer, Carne Grelhada, Alface, Tomate',
    price: 29.99,
    discountPercent: 5,
    type: 'hamburguer',
    slug: 'ligth-chicken-hambuger',
  },
  {
    image: imgBuger05,
    title: 'Vegane Day',
    ingredients: 'Pão de Hambúguer, Carne Grelhada, Alface, Tomate',
    price: 29.99,
    discountPercent: 5,
    type: 'hamburguer',
    slug: 'vegane-day-hambuger',
  },
];
