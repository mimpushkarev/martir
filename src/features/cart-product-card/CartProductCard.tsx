import {CloseOutlined} from '@ant-design/icons';
import {memo} from 'react';

import {useGetProduct} from '_shared/api/product/hooks';
import { currency } from '_utils/intl/numbers';

type CartProductCardType = {productId: string};

const CartProductCard = memo<CartProductCardType>(function CartProductCard({productId}) {
  const {data, isLoading} = useGetProduct(productId);

  return (
    <div>
      {!isLoading ? (
        <div className="flex content-start gap-5">
          <img src={data.image} alt={data.name} className="aspect-square w-[150px]" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="text-paragraph-2">{data.name}</div>
            <div>{/* selekt */}</div>
          </div>
          <div>
            <div className="text-page-title font-normal leading-none">{currency.format(Number(data.price))}</div>
            {data.previousPrice && <div className="flex justify-end text-paragraph text-common-gray line-through">{currency.format(Number(data.previousPrice))}</div>}
          </div>
          <CloseOutlined style={{fontSize: '32px'}} rev={undefined} className="flex items-start" />
        </div>
      ) : (
        null
      )}
    </div>
  );
});

export {CartProductCard};
