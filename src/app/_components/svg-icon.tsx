'use client';
import WhatsLogo from '@/app/_assets/svgs/whatsapp-svgrepo-com.svg';
import Image from 'next/image';

const SVGIcon = () => {
  const handleClickWhat = () => {
    const message = `
        Olá, vim pelo Cardápio Digital!
        Gostaria de mais informações...
    `;
    const whatsappUrl = `https://wa.me/5511941515753?text=${encodeURIComponent(
      `${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <button
      onClick={handleClickWhat}
      className="fixed right-2 bottom-3 h-12.5 w-12.5 cursor-pointer rounded-full"
    >
      <Image src={WhatsLogo} alt="logo whats app" width={40} height={40} />
    </button>
  );
};

export default SVGIcon;
