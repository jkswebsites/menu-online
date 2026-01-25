import Image from 'next/image';
import imgPizza from '@/app/_assets/images/pizza/no-bg-pizza.png';

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image
        src={imgPizza}
        alt="Pizza"
        width={300}
        height={300}
        className="animate-ping"
      />
      <p className="font-poppins animate-pulse text-center font-bold tracking-widest">
        Carregando...
      </p>
    </div>
  );
};

export default LoadingPage;
