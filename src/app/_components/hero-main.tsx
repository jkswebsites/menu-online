import Image from 'next/image';
import imgPizza from '@/app/assets/images/pizza/pizza-forno.png';
import { TbBeach } from 'react-icons/tb';

const HeroMain = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="relative z-0 h-4/5 overflow-hidden lg:h-100">
        <Image
          src={imgPizza}
          width={0}
          height={0}
          alt="pizza no forno a lenha"
          className="relative z-0 mx-auto h-full w-full object-cover"
        />
        <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-neutral-900 to-transparent"></div>
      </div>

      <div className="relative bottom-30 z-50 flex flex-col items-center justify-center">
        <TbBeach className="text-center text-9xl" />
        <div>
          <h2 className="font-roboto text-center text-4xl font-bold">
            Pizzaria
          </h2>
          <h1 className="font-poppins -mt-3 text-center text-4xl font-bold text-yellow-400">
            Roman
          </h1>
          <p className="font-oxygen -mt-1.5 text-sm font-bold tracking-wider text-neutral-400">
            Pizzas assadas à lenha
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
