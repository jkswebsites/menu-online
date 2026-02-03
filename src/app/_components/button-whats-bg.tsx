'use client';
import Image from 'next/image';
import WhatsLogo from '@/app/_assets/svgs/whatsapp-svgrepo-com.svg';
import { ButtonWhatsProps } from './buttons-whats';
import { sendMessage } from '../helpers/message-what';

const ButtonWhat = ({ phone, message }: ButtonWhatsProps) => {
  const handleClickWhat = () => {
    sendMessage({ phone, message });
  };
  return (
    <button
      onClick={handleClickWhat}
      className="mx-auto mt-5 flex w-4/5 cursor-pointer items-center justify-center gap-2 rounded-lg bg-yellow-400 text-center font-bold text-neutral-900"
    >
      <Image src={WhatsLogo} alt="logo whats app" width={30} height={30} />
      Fazer o pedido agora!
    </button>
  );
};

export default ButtonWhat;
