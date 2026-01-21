import { StaticImageData } from 'next/image';

export interface ISlideImage {
  img: StaticImageData;
  description: string;
}

export interface ILinkNav {
  name: string;
  path: string;
  src: StaticImageData;
  description: string;
}
