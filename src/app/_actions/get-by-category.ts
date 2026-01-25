import { hamburguers } from '@/app/_database/hamburguer';
import { pizzas } from '@/app/_database/pizzas';
import { IProduct } from '@/app/_interfaces/product';

export const getByCategory = (categoryName: string): IProduct[] => {
  const foods = [...pizzas, ...hamburguers].filter(
    (food) => food.type === categoryName
  );

  return foods;
};
