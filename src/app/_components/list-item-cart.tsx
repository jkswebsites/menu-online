'use client';
import Image from 'next/image';
import { useCartContext } from '../context/contextCart';
import { GrRestaurant } from 'react-icons/gr';
import { currencyFormatBRL } from '../helpers/calculateDescount';
import { FaTrashAlt } from 'react-icons/fa';

const ListItemCart = () => {
  const { foods } = useCartContext();
  return foods.length > 0 ? (
    <div className="mx-auto h-85 w-[95%]">
      {foods.map((food, index) => (
        <div
          key={index}
          className="flex h-22 w-65 gap-2 rounded-2xl bg-neutral-800 p-2"
        >
          <Image
            src={food.image}
            alt={food.title}
            width={70}
            height={50}
            className="rounded-2xl"
          />

          <div className="h-full w-42">
            <h6 className="truncate text-yellow-300 italic">{food.title}</h6>
            <div className="flex items-center justify-between pr-2">
              <span className="font-poppins my-1 h-5 w-4/5">
                {currencyFormatBRL(food.price)}
              </span>
              <button className="rounded-sm bg-red-600 p-1">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="mx-auto flex h-50 w-4/5 flex-col items-center justify-center">
      <GrRestaurant className="mb-3 text-8xl" />
      <p className="text-center text-yellow-500 italic">
        Não há itens na lista de pedidos
      </p>
    </div>
  );
};

export default ListItemCart;
