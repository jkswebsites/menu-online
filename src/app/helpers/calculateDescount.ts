export const calculateDescount = (
  price: number,
  descountPorcent: number
): number => {
  const discount = (price * descountPorcent) / 100;
  return price - discount;
};

export const currencyFormatBRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
