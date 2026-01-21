import { ILink } from '../_interfaces/links';
import { CiPizza } from 'react-icons/ci';
import { VscHome } from 'react-icons/vsc';
import { IoFastFoodOutline } from 'react-icons/io5';

export const linksNav: ILink[] = [
  { path: '/', label: 'Home', Icon: VscHome },
  { path: '/pizzas', label: 'Pizzas', Icon: CiPizza },
  { path: '/lanches', label: 'Lanches', Icon: IoFastFoodOutline },
];
