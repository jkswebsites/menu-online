'use client';
import { FaTrashAlt } from 'react-icons/fa';
import { useCartContext } from '../context/contextCart';

const ButtonRemove = ({ titleName }: { titleName: string }) => {
  const { removeItem } = useCartContext();

  return (
    <button
      className="rounded-sm bg-red-600 p-1"
      onClick={() => removeItem(titleName)}
    >
      <FaTrashAlt />
    </button>
  );
};

export default ButtonRemove;
