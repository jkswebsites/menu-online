import { ISlideImage } from '../_interfaces/slide-image';
import imgPizza from '@/app/_assets/images/pizza/pizza-forno.png';
import imgPizzaMussurela from '@/app/_assets/images/pizza/pizza-mussarela.png';
import imgPizzaCalabresa from '@/app/_assets/images/pizza/pizza-calabresa.png';
import imgPizzaDoce from '@/app/_assets/images/pizza-doce/pizza-chocolate.png';
import imgPizzaCooking from '@/app/_assets/images/pizza/cooking-pizza.png';

export const slideImages: ISlideImage[] = [
  { img: imgPizza, description: 'Pizza assando' },
  { img: imgPizzaMussurela, description: 'Pizza de Mussarela' },
  { img: imgPizzaCalabresa, description: 'Pizza de Calabresa' },
  { img: imgPizzaDoce, description: 'Pizza de Chocolate' },
  { img: imgPizzaCooking, description: 'Preparando Pizza' },
];
