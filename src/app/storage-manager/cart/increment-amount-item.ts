'use client';
import { ICart } from '@/app/context/contextCart';
import { checkIfWindowIsUndefined } from '@/app/helpers/storage-manager';

export const incrementAmountItem = (titleItem: string) => {
  if (checkIfWindowIsUndefined()) {
    const ordersStorage = localStorage.getItem('cart');
    if (ordersStorage) {
      const orders: ICart[] = JSON.parse(ordersStorage);
      const cartAcc = orders.map((_food) => {
        if (_food.title === titleItem) {
          return {
            ..._food,
            amount: _food.amount + 1,
          };
        }
        return _food;
      });
      localStorage.setItem('cart', JSON.stringify(cartAcc));
    }
  }
};
