import spaten269Lati from '@/app/_assets/images/beer/spaten-269ml-latinha.png';
import Orginal269Lati from '@/app/_assets/images/beer/original-269ml.png';
import amstel269Lati from '@/app/_assets/images/beer/amstel-269ml.png';
import Skol269Lati from '@/app/_assets/images/beer/skol-269ml.png';
import Heineken269Garr from '@/app/_assets/images/beer/heineken-200-garrafa.png';
import Original300Garr from '@/app/_assets/images/beer/original-300ml-garrafa.png';
import { StaticImageData } from 'next/image';
export interface ICervejaOnline {
  images: StaticImageData[];
  title: string;
  description: string;
  price: number;
  customStyle: string;
}
export const products: ICervejaOnline[] = [
  {
    images: [spaten269Lati],
    title: 'Spaten',
    description: '269 ml, super gelada',
    price: 4.0,
    customStyle: 'w-15',
  },
  {
    images: [Orginal269Lati],
    title: 'Original',
    description: '269 ml super gelada',
    price: 4.3,
    customStyle: 'w-10',
  },
  {
    images: [amstel269Lati],
    title: 'Amstel Lager',
    description: '269 ml super gelada',
    price: 3.9,
    customStyle: 'w-15',
  },
  {
    images: [Skol269Lati],
    title: 'Skol',
    description: '269 ml super gelada',
    price: 3.25,
    customStyle: 'w-15',
  },
  {
    images: [Heineken269Garr],
    title: 'Heineken 250ml',
    description: 'Garrafa super gelada',
    price: 5.5,
    customStyle: 'w-10',
  },
  {
    images: [Original300Garr],
    title: 'Original 300ml',
    description: 'Garrafa super gelada',
    price: 3.75,
    customStyle: 'w-10',
  },
];
