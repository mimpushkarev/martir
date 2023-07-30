import {memo} from 'react';

import {ToCartButton} from '_entities/to-cart-button';
import {ToLikedButton} from '_entities/to-liked-button';
import {currency} from '_utils/intl/numbers';

type MainItemCardPropsType = {
  productId: string;
};

const MainItemCard = memo<MainItemCardPropsType>(function MainItemCard({productId}) {
  return (
    <div className="group relative aspect-[1/3] w-64 flex-shrink-0 flex-grow-0 basis-64 overflow-hidden bg-common-dark-gray bg-[url(https://sun9-9.userapi.com/impg/3gQBSEhlihfMYBt4JRGVLWS0Dtkg6DHjoyhsyQ/AWyUhm8N42k.jpg?size=2560x1698&quality=96&sign=6cfcc1e781da60a2339c9bdf4bd5e545&type=album)] bg-cover bg-center">
      <div className="absolute bottom-0 right-0 m-4">
        <div className="flex justify-end gap-2 opacity-0 duration-100 ease-in-out group-hover:opacity-100">
          <ToLikedButton entity={productId} />
          <ToCartButton entity={productId} />
        </div>
        <div className="mt-2 bg-common-darkest-gray p-2 text-paragraph-2">{currency.format(5000)}</div>
      </div>
    </div>
  );
});

export {MainItemCard};
