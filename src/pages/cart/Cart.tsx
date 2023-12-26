import {memo} from 'react';

import {ContactInformation, Delivery, PaymentMethod, PlacingAnOrder, Summary} from '_entities/cart';
import {Container} from '_shared/container';
import {useCartList} from '_utils/hooks';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Cart = memo(function Cart() {
  const [cartList] = useCartList() ;

  return (
    <Container px={4} py={4} className="flex">
      {cartList.length !== 0 ? (
        <div>
          <div className='flex flex-col gap-16'>
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
          <div className="flex w-1/3 flex-col items-center">
            <h1 className="mb-6 text-page-title uppercase">Корзина пуста...</h1>
            <p className="mb-4 text-paragraph">
              В каталоге вы найдете что-то подходящее!
            </p>
            <Link to={'/'}>
              <Button size="large" type='primary'>
                В каталог
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
});

export default Cart;
