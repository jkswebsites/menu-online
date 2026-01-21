import imgPizza from '@/app/_assets/images/pizza/pizza-mussarela.png';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '../_interfaces/product';

interface CarouselItemsProps {
  items: IProduct[];
}
const CarouselItems = ({ items }: CarouselItemsProps) => {
  return (
    <div className="scrollbar-hidden flex h-87.5 w-full flex-nowrap items-center gap-2 overflow-auto py-3.5 pl-2 sm:w-162.5 lg:w-4/6">
      {items.map((item, index) => (
        <Link key={index} href={'/'}>
          <div className="h-87.5 w-50 shrink-0 overflow-hidden rounded-2xl bg-neutral-800">
            <Image
              src={item.image}
              alt={item.title}
              width={0}
              height={0}
              className="h- w-full rounded-2xl transition-all duration-200 ease-in-out hover:scale-125"
            />

            <div className="pl-2">
              <h3 className="font-poppins truncate text-center text-lg tracking-widest text-neutral-50">
                {item.title}
              </h3>
              <p className="-mt-2 truncate text-neutral-400 italic">
                {item.ingredients}
              </p>
              <p className="mt-2 pr-3 text-end text-lg font-black text-yellow-500">
                {item.price}
              </p>

              <div className="font-oxygen mx-auto mt-2 w-[90%] rounded-sm bg-amber-400 py-0.5 text-center font-bold text-neutral-900">
                Detalhes
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarouselItems;
