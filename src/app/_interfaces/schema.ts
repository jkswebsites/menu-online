import { StaticImageData } from 'next/image';
import { IProduct } from './product';
import { ILink } from './links';

export interface Restaurant {
  name: string;
  logo: StaticImageData;
  path: string;
  whatsApp: string;
  categories: string[];
  navHeader: ILink[];
  linksSocial: string;
  catalogies: IProduct[];
}
