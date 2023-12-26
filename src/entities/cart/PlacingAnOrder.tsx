import {memo} from 'react';

import {CartProductCard} from '_features/cart-product-card';

import CartBlock from './CartBlock';
import {PlacingAnOrderType} from './types';

const PlacingAnOrder = memo<PlacingAnOrderType>(function PlacingAnOrder({productIdArr}) {
  return (
    <div>
      <CartBlock title="оформление заказа"></CartBlock>
      <div className='flex flex-col gap-6'>
        {productIdArr.map((productId, index) => {
          return <CartProductCard productId={productId} key={index} />;
        })}
      </div>
    </div>
  );
});

export {PlacingAnOrder};
