import { getByCategory } from '@/app/_actions/get-by-category';
import TitleContainer from '@/app/_components/title-container';
import { currencyFormatBRL } from '@/app/helpers/calculateDescount';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const foods = getByCategory(slug);

  return (
    <div className="h-screen w-full pt-20">
      <div className="px-2">
        <TitleContainer
          subtile={slug.toUpperCase()}
          description={`Confira nossa lista de ${slug}`}
          distak=""
        />

        <div className="scrollbar-hidden mt-2 flex h-125 flex-col gap-y-2 overflow-y-auto pb-5 sm:ml-9 lg:w-155 lg:overflow-visible">
          {foods.map((food, index) => {
            return (
              <Link key={index} href={`/pages/details/${food.slug}`}>
                <div className="flex h-37.5 w-full items-center gap-3 space-y-2 rounded-3xl border-b border-neutral-400 bg-black px-1 hover:scale-110">
                  <div className="h-4/5 w-4/12 overflow-hidden rounded-2xl">
                    <Image
                      src={food.image}
                      alt={food.title}
                      width={0}
                      height={0}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="h-full w-50 pt-2 pr-1">
                    <div>
                      <h2 className="font-poppins truncate text-yellow-400">
                        {food.title}
                      </h2>
                      <p className="font-roboto truncate italic">
                        {food.ingredients}
                      </p>

                      <div className="my-3">
                        <span className="font-poppins tracking-wider text-yellow-400">
                          {currencyFormatBRL(food.price)}
                        </span>
                      </div>
                    </div>
                    <div className="font-oxygen w-4/5 rounded-sm bg-yellow-400 text-center font-bold text-neutral-900">
                      Mais Detalhes
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
