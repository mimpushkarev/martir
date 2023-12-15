import {memo} from 'react';

import CartBlock from './CartBlock';

const Delivery = memo(function Delivery() {
  return (
    <div>
      <CartBlock title="доставка"></CartBlock>
    </div>
  );
});

export {Delivery};
