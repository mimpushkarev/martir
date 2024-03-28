import {Form} from 'antd';
import {memo} from 'react';

import {useCartList} from '_utils/hooks';

import {ContactInfo} from './ContactInfo';
import {Delivery} from './Delivery';
import {Payment} from './Payment';
import {Products} from './Products';

const CartForm = memo(function CartForm() {
  const [cartList] = useCartList();

  return (
    <Form layout="vertical">
      <div className="flex flex-1 flex-col gap-16">
        <Products productIdArr={cartList} />
        <Delivery />
        <Payment />
        <ContactInfo />
      </div>
    </Form>
  );
});

export {CartForm};
