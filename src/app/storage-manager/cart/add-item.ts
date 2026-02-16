'use client';
import { ICart } from '@/app/context/contextCart';
import { checkIfWindowIsUndefined } from '@/app/helpers/storage-manager';

export const saveItemInStorage = (item: ICart) => {
  if (checkIfWindowIsUndefined()) {
    const ordersStorage = localStorage.getItem('cart');
    if (ordersStorage) {
      const orders: ICart[] = JSON.parse(ordersStorage);
      const getByTitle = orders.map((order) => order.title);

      if (getByTitle.includes(item.title)) {
        const cartAcc = orders.map((_food) => {
          if (_food.title === item.title) {
            return {
              ..._food,
              amount: _food.amount + item.amount,
            };
          }
          return _food;
        });
        localStorage.setItem('cart', JSON.stringify(cartAcc));
      } else {
        localStorage.setItem('cart', JSON.stringify([...orders, item]));
      }
    } else {
      localStorage.setItem('cart', JSON.stringify([item]));
    }
  }
};
