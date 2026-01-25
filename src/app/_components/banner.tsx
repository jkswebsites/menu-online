import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface BannerVerticalProps {
  path: string;
  src: StaticImport;
  title: string;
}

const BannerVertical = ({ path, src, title }: BannerVerticalProps) => {
  return (
    <Link href={path}>
      <div className="relative flex h-40 w-full overflow-hidden rounded-2xl bg-linear-65 from-yellow-300 to-yellow-600 sm:w-150 lg:h-50 lg:w-175">
        <div className="absolute -right-20 h-60 w-60 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt="Coca Cola"
            width={0}
            height={0}
            className="mx-auto h-full w-full scale-200 object-cover"
          />
        </div>
        <div className="relative z-20 mb-6 flex w-50 flex-col justify-end pl-2.5 lg:mb-15 lg:ml-5 lg:w-4/5">
          <h2 className="font-poppins w-37.5 text-2xl font-bold text-neutral-900 lg:w-4/5 lg:text-4xl">
            {title}
          </h2>

          <div className="mt-1.5 w-35 rounded-sm bg-neutral-900 py-1 text-center">
            Confira à lista!
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerVertical;
