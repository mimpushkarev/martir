import {CloseOutlined} from '@ant-design/icons';
import {memo} from 'react';

import {useGetProduct} from '_shared/api/product/hooks';

type CartProductCardType = {productId: string};

const CartProductCard = memo<CartProductCardType>(function CartProductCard({productId}) {
  const {data, isLoading} = useGetProduct(productId);
  return (
    <div>
      {!isLoading ? (
        <div className="flex content-start gap-5">
          <img src={data.image} alt={data.name} className="aspect-square w-[150px]" />
          <div className="flex">
            <div className="w-[500px] truncate text-paragraph-2">{data.name}</div>
            <div>{/* selekt */}</div>
          </div>
          <div>
            <div className="text-page-title font-normal">{data.price} ₽</div>
            <div className="flex justify-end text-paragraph text-common-gray line-through">{data.previousPrice} ₽</div>
          </div>
          <CloseOutlined style={{fontSize: '32px'}} rev={undefined} className="flex items-start" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
});

export {CartProductCard};
