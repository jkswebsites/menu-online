'use client';
import { GoPlus } from 'react-icons/go';
import { RiSubtractFill } from 'react-icons/ri';
import { ICart, useCartContext } from '../context/contextCart';

interface CountQuantityProps {
  cart: ICart;
}
const CountQuantity = ({ cart }: CountQuantityProps) => {
  const { incrementAmount, decrementAmount } = useCartContext();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decrementAmount(cart.title)}
        className="rounded-sm bg-yellow-400 p-1 text-neutral-900"
      >
        <RiSubtractFill />
      </button>
      <span className="font-poppins text-lg">{cart.amount}</span>
      <button
        onClick={() => incrementAmount(cart.title)}
        className="rounded-sm bg-yellow-400 p-1 text-neutral-900"
      >
        <GoPlus />
      </button>
    </div>
  );
};

export default CountQuantity;
