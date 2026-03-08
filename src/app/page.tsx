import Link from 'next/link';
import TitleContainer from './_components/title-container';
import imgDonRamon from '@/app/_assets/images/pizza/cooking-pizza.png';
import imgLogoDonRamon from '@/app/_assets/images/pizza/cooking-pizza.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-full p-6">
      <TitleContainer
        subtile="Restaurantes"
        description="Confira à listas de restaurantes"
        distak=""
      />

      <div className="mt-7">
        <Link href={'/don-ramon'}>
          <div className="w-4/ h-55 overflow-hidden rounded-2xl border border-neutral-600 bg-neutral-950 sm:w-125">
            <div className="h-30 w-full overflow-hidden">
              <Image
                src={imgDonRamon}
                alt="pizzaria Don Ramon"
                width={0}
                height={0}
                className="relative bottom-30"
              />
            </div>
            <div className="flex w-full gap-3 px-3">
              <div className="h-15 w-15 overflow-hidden rounded-full bg-red-600">
                <Image
                  src={imgLogoDonRamon}
                  alt="logo pizzaria Don Ramon"
                  width={0}
                  height={0}
                  className="h-full w-full"
                />
              </div>

              <div className="py-2">
                <h2 className="font-roboto text-lg font-bold text-yellow-300">
                  Don Ramon
                </h2>
                <p className="font-oxygen -mt-2 w-75 truncate text-neutral-300 italic">
                  Pizzaria especializada em pizzas assadas à lenha
                </p>

                <button className="font-oxygen my-2 w-4/5 rounded-2xl bg-amber-400 font-bold text-neutral-950">
                  Confira mais detalhes
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
