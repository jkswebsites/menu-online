'use client';
import { ICart } from '@/app/context/contextCart';
import { checkIfWindowIsUndefined } from '@/app/helpers/storage-manager';

export const removeCartStorage = (titleItem: string) => {
  if (checkIfWindowIsUndefined()) {
    const ordersStorage = localStorage.getItem('cart');
    if (ordersStorage) {
      const ordersCart: ICart[] = JSON.parse(ordersStorage);

      const removedItem = ordersCart.filter(
        (order) => order.title !== titleItem
      );

      localStorage.setItem('cart', JSON.stringify(removedItem));
    }
  }
};
