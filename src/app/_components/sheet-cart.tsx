'use client';
import { BsCart4 } from 'react-icons/bs';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoFastFoodOutline } from 'react-icons/io5';
import { useCartContext } from '../context/contextCart';
import ListItemCart from './list-item-cart';
import { currencyFormatBRL } from '../helpers/calculateDescount';
import { sendMessage } from '../helpers/message-what';

const SheetCart = () => {
  const { foods } = useCartContext();
  const quantity = foods.reduce((acc, curr) => (acc += curr.amount), 0);
  const totalOrder = foods.reduce(
    (acc, curr) => acc + curr.amount * curr.price,
    0
  );
  const handleClickMakeOrder = () => {
    const makerOder = foods
      .map(
        (food) =>
          `
         - ​ ${food.type.toUpperCase()}
         - ​ ${food.title}
         - ​ ${food.ingredients}
         - ​ ${food.amount} X ${food.price} = ${food.amount * food.price}
        ----------------
      `
      )
      .join('');
    const messageWhats = `
          Confira o(s) Pedido(s)
          ${makerOder}
        `;
    sendMessage({ phone: '5511941515753', message: messageWhats });
  };
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-y-amber-500 bg-neutral-800 hover:scale-110">
          {quantity > 0 && (
            <span className="font-poppins absolute -top-4 -right-2 block w-fit rounded-2xl bg-yellow-500 px-2 text-center font-bold text-neutral-900">
              {quantity}
            </span>
          )}
          <BsCart4 title="Abrir Carrinho" className="text-2xl" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex gap-3">
              <IoFastFoodOutline className="text-4xl text-yellow-400" />
              Meus Pedidos
            </div>
          </SheetTitle>
          <SheetDescription>
            Confira a lista de itens adicionados e finalize o pedido no botão
            abaixo:
          </SheetDescription>
        </SheetHeader>

        <ListItemCart />

        {foods.length > 0 && (
          <>
            <div className="mx-auto w-[94%]">
              <p className="flex items-center justify-between p-3">
                <span>Total:</span>
                <span className="font-poppins text-2xl">
                  {currencyFormatBRL(totalOrder)}
                </span>
              </p>
            </div>
            <button
              onClick={handleClickMakeOrder}
              className="mx-auto w-4/5 cursor-pointer rounded-sm bg-emerald-500 py-1 font-bold text-neutral-900"
            >
              Finalizar Pedido
            </button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
