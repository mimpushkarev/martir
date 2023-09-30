import {memo} from 'react';

import {cn} from '_utils/cn';

import {VievedProductType} from './types';

const ViewedProducts = memo<VievedProductType>(function ViewedProducts({products, className}) {
  return (
    <div className="flex gap-5">
      <div className="flex aspect-square h-60 flex-col items-center justify-center italic">
        <p>Просмотренные товары</p>
        <p className="text-small">это что бы вы не потеряли</p>
      </div>
      <div
        className={cn('flex h-60 gap-5', {
          [className as string]: !!className
        })}
      >
        {products.map((product, index) => (
          <div key={index} className="h-full flex-shrink-0">
            <a href={product.link} target="_blank" rel="noreferrer">
              <img src={product.image} alt={product.name} className="aspect-square h-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});

export {ViewedProducts};
