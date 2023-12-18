import {memo} from 'react';

import CartBlock from './CartBlock';

const PaymentMethod = memo(function PaymentMethod() {
  return (
    <div>
      <CartBlock title="Способ оплаты"></CartBlock>
    </div>
  );
});

export {PaymentMethod};
