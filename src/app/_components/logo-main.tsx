import Link from 'next/link';
import { TbBeach } from 'react-icons/tb';

const LogoMain = () => {
  return (
    <Link href={'/'} className="flex h-14 items-center justify-center gap-3">
      <TbBeach className="text-5xl" />
      <div className="flex flex-col">
        <span className="text-2xl font-extrabold">Pizzaria</span>
        <span className="-mt-3 text-2xl font-extrabold text-yellow-500 italic">
          Roman
        </span>
      </div>
    </Link>
  );
};

export default LogoMain;
