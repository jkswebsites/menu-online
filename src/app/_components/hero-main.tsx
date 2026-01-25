'use client';
import Image from 'next/image';
import { TbBeach } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { ISlideImage } from '../_interfaces/slide-image';

interface HeroMainProps {
  slideImages: ISlideImage[];
}
const HeroMain = ({ slideImages }: HeroMainProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[80vh] w-full">
      <div className="relative z-0 h-4/5 overflow-hidden lg:h-100">
        <Image
          src={slideImages[currentIndex].img}
          width={0}
          height={0}
          alt={slideImages[currentIndex].description}
          className="relative z-0 mx-auto h-full w-full animate-pulse object-cover"
        />
        <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-neutral-900 to-transparent"></div>
      </div>

      <div className="relative bottom-30 z-40 flex flex-col items-center justify-center">
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
