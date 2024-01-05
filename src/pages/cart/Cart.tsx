import {memo} from 'react';

import {Container} from '_shared/container';
import {CartEmptyPage} from '_shared/empty-page';
import {useCartList} from '_utils/hooks';
import {CartForm} from '_widgets/cart-form';
import {CartSummary} from '_widgets/cart-summary';

const Cart = memo(function Cart() {
  const [cartList] = useCartList();

  return (
    <Container px={3} py={4}>
      {cartList.length !== 0 ? (
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="flex-1">
            <CartForm />
          </div>
          <div className="flex-[0_0_512px]">
            <div className="sticky top-10">
              <CartSummary />
            </div>
          </div>
        </div>
      ) : (
        <CartEmptyPage />
      )}
    </Container>
  );
});

export default Cart;
