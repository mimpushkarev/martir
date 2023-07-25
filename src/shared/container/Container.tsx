import {PropsWithChildren, memo} from 'react';

import {GridSizes} from '@shared/types';
import {cn} from '@utils/cn';

type ContainerProps = PropsWithChildren<{
  px?: GridSizes;
  py?: GridSizes;
  width?: 'small' | 'large' | 'full-width';
  className?: string;
}>;

const Container = memo<ContainerProps>(function Container({children, px = 0, py = 0, className, width = 'full-width'}) {
  return (
    <div
      className={cn('mx-auto', {
        'px-10': px === 6,
        'py-10': py === 6,
        'px-8': px === 5,
        'py-8': py === 5,
        'px-6': px === 4,
        'py-6': py === 4,
        'px-4': px === 3,
        'py-4': py === 3,
        'px-2': px === 2,
        'py-2': py === 2,
        'px-1': px === 1,
        'py-1': py === 1,
        'max-w-[680px]': width === 'small',
        'max-w-[980px]': width === 'large',
        [className as string]: !!className
      })}
    >
      {children}
    </div>
  );
});

export {Container};
