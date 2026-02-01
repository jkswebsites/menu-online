import { ButtonWhatsProps } from '../_components/buttons-whats';

export const sendMessage = ({ phone, message }: ButtonWhatsProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `${message}`
  )}`;
  window.open(whatsappUrl, '_blank');
};
