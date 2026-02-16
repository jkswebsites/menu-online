'use client';
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { IProduct } from '../_interfaces/product';
import { checkIfWindowIsUndefined } from '../helpers/storage-manager';
import { saveItemInStorage } from '../storage-manager/cart/add-item';
import { removeCartStorage } from '../storage-manager/cart/delete-item';
import { incrementAmountItem } from '../storage-manager/cart/increment-amount-item';
import { decrementAmountItem } from '../storage-manager/cart/decrement-amount-item';

export interface ICart extends IProduct {
  amount: number;
}
interface CartContext {
  foods: ICart[];
  addInCart: (item: ICart) => void;
  removeItem: (titleItem: string) => void;
  incrementAmount: (titleItem: string) => void;
  decrementAmount: (titleItem: string) => void;
}

const CartContext = createContext<CartContext | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartDatas, setCartDatas] = useState<ICart[]>([]);
  const [callFetch, setCallFetch] = useState<boolean>(false);

  const addInCart = (item: ICart) => {
    saveItemInStorage(item);
    setCallFetch(true);
  };
  const removeItem = (titleItem: string) => {
    removeCartStorage(titleItem);
    setCallFetch(true);
  };
  const incrementAmount = (titleItem: string) => {
    incrementAmountItem(titleItem);
    setCallFetch(true);
  };
  const decrementAmount = (titleItem: string) => {
    decrementAmountItem(titleItem);
    setCallFetch(true);
  };

  useEffect(() => {
    try {
      if (checkIfWindowIsUndefined()) {
        const ordersStorage = localStorage.getItem('cart');
        if (ordersStorage) {
          const orders: ICart[] = JSON.parse(ordersStorage);
          setCartDatas(orders);
        } else {
          setCartDatas([]);
        }
      }
    } catch (error) {
      alert(`(X) - Ocorreu um erro ${error}`);
    } finally {
      setCallFetch(false);
    }
  }, [callFetch]);

  return (
    <CartContext.Provider
      value={{
        foods: cartDatas,
        addInCart,
        removeItem,
        incrementAmount,
        decrementAmount,
      }}
    >
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
