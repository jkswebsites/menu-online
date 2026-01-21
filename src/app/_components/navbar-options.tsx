import Image from 'next/image';
import Link from 'next/link';
import { ILinkNav } from '@/app/_interfaces/slide-image';

interface NavbarOptionsProps {
  options: ILinkNav[];
}
const NavbarOptions = ({ options }: NavbarOptionsProps) => {
  return (
    <nav className="scrollbar-hidden mx-auto flex h-30 w-[90%] items-center justify-around gap-4 overflow-auto scroll-smooth px-5 lg:w-150 lg:gap-0">
      {options.map((option, index) => (
        <Link href={option.path} key={index}>
          <div className="flex w-20 flex-col items-center justify-center">
            <Image
              src={option.src}
              alt={option.description}
              width={0}
              height={0}
              className="h-20 w-fit object-cover transition-all ease-in-out hover:scale-125"
            />
            <span>{option.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavbarOptions;
