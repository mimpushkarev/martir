import {memo} from 'react';

import {CartBlockType} from './types';

const CartBlock = memo<CartBlockType>(function CartBlock({children, title}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-hero font-medium uppercase">{title}</div>
      <div>{children}</div>
    </div>
  );
});

export default CartBlock;
