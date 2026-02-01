import { hamburguers } from '@/app/_database/hamburguer';
import { pizzas } from '@/app/_database/pizzas';
import { IProduct } from '@/app/_interfaces/product';
import { sodas } from '../_database/sodas';

export const getItem = (urlSlug: string): IProduct | undefined => {
  const foods = [...pizzas, ...hamburguers, ...sodas].find(
    (food) => food.slug === urlSlug
  );

  return foods;
};
