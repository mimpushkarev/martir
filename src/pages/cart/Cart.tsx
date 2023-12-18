import {memo} from 'react';

import {ContactInformation, Delivery, PaymentMethod, PlacingAnOrder, Summary} from '_entities/cart';
import CartBlock from '_entities/cart/CartBlock';
import {Container} from '_shared/container';
import {useCartList} from '_utils/hooks';

const Cart = memo(function Cart() {
  const [cartList] = useCartList() || [];
  console.log(cartList);
  return (
    <Container px={4} py={4} className="flex">
      {cartList.length !== 0 ? (
        <div>
          <div>
            <PlacingAnOrder productIdArr={cartList} />
            <Delivery />
            <PaymentMethod />
            <ContactInformation />
          </div>
          <div>
            <Summary />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full justify-center text-center">
          <CartBlock title="Пусто и грустно">
            <div className=" text-subtitle">
              Ваша корзина пуста, но у нас много товаров, из которых вы можете выбрать!
            </div>
          </CartBlock>
        </div>
      )}
    </Container>
  );
});

export default Cart;
