import {memo} from 'react';

import {cn} from '_utils/cn';

import {HoverIconsType} from './types';

const HoverIcons = memo<HoverIconsType>(function HoverIcons({icon, iconName, className, onClick}) {
  return (
    <img
      src={icon}
      alt={iconName}
      className={cn('block cursor-pointer rounded-lg p-2 duration-200 ease-in-out hover:bg-common-dark-gray', {
        [className as string]: !!className
      })}
      onClick={
        onClick
          ? onClick
          : () => {
              console.error('OnClick is empty!!!!');
            }
      }
    />
  );
});

export {HoverIcons};
