'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { IProduct } from '../_interfaces/product';

interface ICart extends IProduct {
  amount: number;
}
interface CartContext {
  foods: ICart[];
  addInCart: (item: ICart) => void;
}

const CartContext = createContext<CartContext | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartContext, setCartContext] = useState<ICart[]>([]);

  const addInCart = (item: ICart) => {
    setCartContext((prevState) => {
      const checkIfThereTitle = prevState
        .map((state) => state.title)
        .includes(item.title);

      if (checkIfThereTitle) {
        return prevState.map((state) => {
          const currvAmount = state.amount + item.amount;
          return { ...state, amount: currvAmount };
        });
      }
      return [...prevState, item];
    });
  };

  return (
    <CartContext.Provider value={{ foods: cartContext, addInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de useCartProvider');
  }
  return context;
};
