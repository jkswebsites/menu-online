import { StaticImageData } from 'next/image';

export interface IProduct {
  title: string;
  ingredients: string;
  price: number;
  image: StaticImageData;
  discountPercent: number;
  type: string;
  slug: string;
}
