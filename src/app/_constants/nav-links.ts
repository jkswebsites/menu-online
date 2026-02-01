import { ILink } from '../_interfaces/links';
import { CiPizza, CiBurger } from 'react-icons/ci';
import { VscHome } from 'react-icons/vsc';
import { GiFullPizza } from 'react-icons/gi';

export const linksNav: ILink[] = [
  { path: '/', label: 'Home', Icon: VscHome },
  { path: '/pages/category/pizza', label: 'Pizzas', Icon: CiPizza },
  { path: '/pages/category/hamburguer', label: 'Hamburger', Icon: CiBurger },
  {
    path: '/pages/category/refrigerante',
    label: 'Pizza Doce',
    Icon: GiFullPizza,
  },
];
