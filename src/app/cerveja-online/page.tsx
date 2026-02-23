import Image from 'next/image';
import { products } from './items/cervejas';
import { currencyFormatBRL } from '../helpers/calculateDescount';
import ButtonWhat from '../_components/button-whats-bg';

const CervejaOnlinePage = () => {
  return (
    <div className="h-screen w-full pt-11 pl-2 lg:px-6">
      <h2 className="font-poppins text-3xl font-bold text-yellow-400">
        Cervejas
      </h2>
      <p className="-mt-1.5 text-lg italic">
        Confira à lista de cervejas disponíveis
      </p>

      <div className="scrollbar-hidden mx-auto mt-10 h-120 w-[90%] space-y-2.5 overflow-y-auto sm:w-110">
        {products.map((item, index) => (
          <div
            className="flex h-35 items-center justify-between gap-3 rounded-2xl bg-neutral-800 p-2"
            key={index}
          >
            <div className="flex h-[95%] w-25 items-center justify-center rounded-2xl">
              <Image
                src={item.images[0]}
                alt={item.title}
                width={0}
                height={0}
                className={`h-22.5 ${item.customStyle} cursor-pointer brightness-90 drop-shadow-lg hover:scale-200`}
              />
            </div>

            <div className="h-[90%] grow">
              <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
                {item.title}
              </h2>
              <p className="w-50 truncate italic">{item.description}</p>
              <p className="font-oxygen text-lg">
                {currencyFormatBRL(item.price)}
              </p>

              <div className="mt-1">
                <ButtonWhat
                  phone="5511941515753"
                  message={`Gostaria de comprar ${item.title} `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CervejaOnlinePage;
