'use client';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { IProduct } from '../_interfaces/product';
import { useCartContext } from '../context/contextCart';

interface ButtonCartOrderProps {
  item: IProduct;
}
const ButtonCartOrder = ({ item }: ButtonCartOrderProps) => {
  const { foods, addInCart } = useCartContext();
  const handleClick = () => {
    addInCart({ ...item, amount: 1 });
  };
  return (
    <button
      className="mx-auto mt-5 flex w-4/5 cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-800 py-1 text-center font-bold text-neutral-100"
      onClick={handleClick}
    >
      <MdOutlineAddShoppingCart className="text-2xl text-yellow-400" />
      Adicionar à Lista
    </button>
  );
};

export default ButtonCartOrder;
