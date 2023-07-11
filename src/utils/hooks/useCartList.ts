import useLocalStorage from 'use-local-storage';

const DEFAULT_STORAGE_VALUE = [];

export const useCartList = () => {
  return useLocalStorage<string[]>('cart_list', DEFAULT_STORAGE_VALUE);
};
