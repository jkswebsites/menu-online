import Link from 'next/link';
import { TbBeach } from 'react-icons/tb';
interface LogoMainProps {
  pathLink: string;
}
const LogoMain = ({ pathLink }: LogoMainProps) => {
  return (
    <Link
      href={`/${pathLink}`}
      className="flex h-14 items-center justify-center gap-1"
    >
      <TbBeach className="text-3xl" />
      <div className="flex flex-col">
        <span className="font-roboto text-lg font-extrabold">Pizzaria</span>
        <span className="font-poppins -mt-3 text-lg font-extrabold text-yellow-500">
          Roman
        </span>
      </div>
    </Link>
  );
};

export default LogoMain;
