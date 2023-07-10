import {xor} from 'lodash';
import {memo, useCallback, useMemo} from 'react';

import {ShoppingCartIcon as ShoppingCartIconOutline} from '@heroicons/react/outline';
import {ShoppingCartIcon as ShoppingCartIconSolid} from '@heroicons/react/solid';
import {cn} from '@utils/cn';
import {useCartList} from '@utils/hooks';

type ToCartButtonPropsType = {
  entity: string;
};

const ToCartButton = memo<ToCartButtonPropsType>(function ToCartButton({entity}) {
  const [cart, setCart] = useCartList();
  const addEntityToCart = useCallback(() => {
    setCart(prev => xor(prev, [entity]));
  }, [entity, setCart]);

  const cartSet = useMemo(() => new Set(cart), [cart]);

  return (
    <div
      onClick={addEntityToCart}
      className="cursor-pointer select-none bg-common-darkest-gray p-2 duration-200 ease-in-out hover:bg-common-bg"
    >
      <ShoppingCartIconSolid
        className={cn('absolute h-6 w-6 duration-200 ease-in-out', {
          'opacity-0': !cartSet.has(entity)
        })}
      />
      <ShoppingCartIconOutline className="h-6 w-6" />
    </div>
  );
});

export {ToCartButton};
