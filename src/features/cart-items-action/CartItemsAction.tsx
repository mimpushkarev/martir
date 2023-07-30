import {ShoppingCartIcon} from '@heroicons/react/solid';
import {memo} from 'react';

import {useCartList} from '_utils/hooks';

const CartItemsAction = memo(function CartItemsAction() {
  const [cart] = useCartList();

  return (
    <div>
      <div className="relative flex h-5 w-5 cursor-pointer items-center justify-center fill-common-gray duration-200 ease-in-out hover:fill-common-light-gray">
        <ShoppingCartIcon fill="inherit" />
        {!!cart.length && (
          <div className="bg text absolute left-full top-full flex h-4 w-4 -translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-lg bg-danger-normal text-small">
            {cart.length}
          </div>
        )}
      </div>
    </div>
  );
});

export {CartItemsAction};
