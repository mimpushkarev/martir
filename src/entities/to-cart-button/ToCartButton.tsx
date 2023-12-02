import {ShoppingCartIcon as ShoppingCartIconOutline} from '@heroicons/react/outline';
import {ShoppingCartIcon as ShoppingCartIconSolid} from '@heroicons/react/solid';
import {xor} from 'lodash';
import {memo, useCallback, useMemo} from 'react';

import {cn} from '_utils/cn';
import {useCartList} from '_utils/hooks';

type ToCartButtonPropsType = {
  entity: string;
};

const ToCartButton = memo<ToCartButtonPropsType>(function ToCartButton({entity}) {
  const [cart, setCart] = useCartList();
  const addEntityToCart = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setCart(prev => xor(prev, [entity]));
    },
    [entity, setCart]
  );

  const cartSet = useMemo(() => new Set(cart), [cart]);

  return (
    <div onClick={addEntityToCart} className="cursor-pointer select-none p-2 hover:text-danger-normal">
      <ShoppingCartIconSolid
        className={cn('absolute h-6 w-6 duration-200 ease-in-out', {
          'opacity-0': !cartSet.has(entity)
        })}
      />
      <ShoppingCartIconOutline className="h-6 w-6 duration-200 ease-in-out" />
    </div>
  );
});

export {ToCartButton};
