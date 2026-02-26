import spaten269Lati from '@/app/_assets/images/beer/spaten-269ml-latinha.png';
import Orginal269Lati from '@/app/_assets/images/beer/original-269ml.png';
import Orginal269litri from '@/app/_assets/images/beer/original-litrinho.png';
import amstel269Lati from '@/app/_assets/images/beer/amstel-269ml.png';
<<<<<<< HEAD
import amstel269Caix from '@/app/_assets/images/beer/amstel-269-caixinha.png';
import skol269Caix from '@/app/_assets/images/beer/skol-lata-269.png';
import heineken500litrinho from '@/app/_assets/images/beer/heineken-250-garrafa-preview.png';

export const products = [
  {
    images: [amstel269Caix],
    title: 'Amstel',
    description: 'Caixinha contém  12 latinhas de 269 ml',
    price: 38.5,
    custonStyles: 'w-30',
  },
  {
    images: [skol269Caix],
    title: 'Skol',
    description: 'Skol latinha 269 mls',
    price: 3.25,
    custonStyles: 'w-16',
=======
import amstel269Caixinha from '@/app/_assets/images/beer/amstel-269-caixinha.png';
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
    images: [amstel269Caixinha],
    title: 'Amstel',
    description: 'Caixinha 12 latinha 269 mls',
    price: 38.5,
    customStyle: '',
  },
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
>>>>>>> 1d8b4fb76d5526ab8ed4d820bde07a9fc0295482
  },
  {
    images: [amstel269Lati],
    title: 'Amstel Lager',
<<<<<<< HEAD
    description: '269 ml, super gelada',
    price: 3.9,
    custonStyles: 'w-16',
  },
  {
    images: [spaten269Lati],
    title: 'Spaten',
    description: '269 ml, super gelada',
    price: 3.9,
    custonStyles: 'w-16',
  },
  {
    images: [Orginal269Lati],
    title: 'Original',
    description: '269 ml, super gelada',
    price: 4.3,
    custonStyles: 'w-12',
  },
  {
    images: [Orginal269litri],
    title: 'Original Litrinho',
    description: 'Original Litrinho 300 ml, super gelada',
    price: 3.75,
    custonStyles: 'w-16',
  },
  {
    images: [heineken500litrinho],
    title: 'Heineken',
    description: 'Heineken litrinho 500 ml, super gelada',
    price: 5.5,
    custonStyles: 'w-10',
=======
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
    customStyle: 'w-11',
>>>>>>> 1d8b4fb76d5526ab8ed4d820bde07a9fc0295482
  },
];
