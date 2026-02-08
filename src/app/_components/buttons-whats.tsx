'use client';
import WhatsLogo from '@/app/_assets/svgs/whatsapp-svgrepo-com.svg';
import Image from 'next/image';
import { sendMessage } from '../helpers/message-what';

export interface ButtonWhatsProps {
  phone: string;
  message: string;
}
const ButtonWhats = ({ phone, message }: ButtonWhatsProps) => {
  const handleClickWhat = () => {
    sendMessage({ phone, message });
  };
  return (
    <button
      onClick={handleClickWhat}
      className="h-12.5 w-12.5 cursor-pointer rounded-full"
    >
      <Image src={WhatsLogo} alt="logo whats app" width={40} height={40} />
    </button>
  );
};

export default ButtonWhats;
