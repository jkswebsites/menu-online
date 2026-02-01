import { getItem } from '@/app/_actions/get-item';
import { currencyFormatBRL } from '@/app/helpers/calculateDescount';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ButtonWhat from '@/app/_components/button-whats-bg';

interface DetailsPageProps {
  params: {
    slug: string;
  };
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto h-screen w-full pt-10 sm:w-162.5">
      <div className="relative h-100 w-full overflow-hidden">
        <div className="absolute h-full w-full bg-linear-to-t from-neutral-900 from-0% to-transparent"></div>
        <Image
          src={item.image}
          alt={item.title}
          className="h-full rounded-b-2xl"
          width={0}
          height={0}
        />
      </div>
      <div className="px-4">
        <div>
          <h2 className="font-roboto text-2xl font-bold text-yellow-300">
            {item.title}
          </h2>
          <p className="space-x-3 text-start text-3xl text-neutral-300">
            {item.price > 0 && (
              <span className="font-oxygen">
                <span className="text-sm font-bold text-yellow-400">De:</span>
                <span className="text-2xl line-through">
                  {currencyFormatBRL(item.price)}
                </span>
              </span>
            )}
            <span>
              <span className="text-sm font-bold text-yellow-400">Por:</span>
              <span className="font-poppins font-bold">
                {currencyFormatBRL(item.price)}
              </span>
            </span>
          </p>
        </div>
        <ButtonWhat
          phone="5511941515753"
          message={`Olá, Vim pelo Cardápio Digital!
          Gostária de uma ${item.type.toUpperCase()} de
          ${item.title}
          `}
        />

        <p className="mx-auto my-4 text-lg italic">{item.ingredients}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
