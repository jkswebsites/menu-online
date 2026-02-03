import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '../_interfaces/product';
import {
  calculateDescount,
  currencyFormatBRL,
} from '../helpers/calculateDescount';

interface CarouselItemsProps {
  items: IProduct[];
}
const CarouselItems = ({ items }: CarouselItemsProps) => {
  return (
    <div className="scrollbar-hidden flex h-100.5 w-full flex-nowrap items-center gap-2 overflow-auto px-2 py-3 sm:w-162.5 lg:w-fit">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/pages/details/${item.slug}`}
          className="block"
        >
          <div className="h-87.5 w-50 overflow-hidden rounded-2xl bg-neutral-800">
            <div className="h-53 w-full items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={0}
                height={0}
                className="h-full transition-all duration-200 ease-in-out hover:scale-125"
              />
            </div>

            <div className="pl-1">
              <h3 className="font-poppins truncate text-center text-lg tracking-widest text-neutral-50">
                {item.title}
              </h3>
              <p className="-mt-2 truncate text-neutral-400 italic">
                {item.ingredients}
              </p>

              <div className="px flex items-center justify-between rounded-2xl bg-neutral-900 p-1.5">
                {item.price > 0 && (
                  <div>
                    De:{' '}
                    <span className="text-end text-sm font-black text-neutral-400 line-through">
                      {item.price}{' '}
                    </span>
                  </div>
                )}

                <div className="space-x-2">
                  {item.price > 0 && <span>Por:</span>}
                  <span className="text-lg font-black text-yellow-500">
                    {currencyFormatBRL(
                      calculateDescount(item.price, item.discountPercent)
                    )}{' '}
                  </span>
                </div>
              </div>

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
