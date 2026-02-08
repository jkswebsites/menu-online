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

const SheetCart = () => {
  const { foods } = useCartContext();
  const quantity = foods.reduce((acc, curr) => (acc += curr.amount), 0);
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
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
