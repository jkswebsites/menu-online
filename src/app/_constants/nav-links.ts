import { ILink } from '../_interfaces/links';
import { CiPizza, CiBurger } from 'react-icons/ci';
import { VscHome } from 'react-icons/vsc';
import { GiFullPizza } from 'react-icons/gi';

export const linksNav: ILink[] = [
  { path: '/don-ramon', label: 'Home', Icon: VscHome },
  { path: '/don-ramon/category/pizza', label: 'Pizzas', Icon: CiPizza },
  {
    path: '/don-ramon/category/hamburguer',
    label: 'Hamburger',
    Icon: CiBurger,
  },
  {
    path: '/don-ramon/category/refrigerante',
    label: 'Pizza Doce',
    Icon: GiFullPizza,
  },
];
