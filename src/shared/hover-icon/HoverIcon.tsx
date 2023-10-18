import {memo} from 'react';

import {cn} from '_utils/cn';

import {HoverIconType} from './types';

const HoverIcon = memo<HoverIconType>(function HoverIcon({className, children, ...props}) {
  return (
    <div
      {...props}
      className={cn(
        'block cursor-pointer select-none rounded-lg p-2 duration-200 ease-in-out hover:bg-common-dark-gray',
        {
          [className as string]: !!className
        }
      )}
    >
      {children}
    </div>
  );
});

export {HoverIcon};
