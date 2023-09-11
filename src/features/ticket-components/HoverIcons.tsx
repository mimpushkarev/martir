import {memo} from 'react';

import {cn} from '_utils/cn';

import {HoverIconsType} from './types';

const HoverIcons = memo<HoverIconsType>(function HoverIcons({icon, iconName, className, onClick}) {
  return (
    <img
      src={icon}
      alt={iconName}
      className={cn('block rounded-lg p-2 hover:bg-common-dark-gray ', {
        [className as string]: !!className
      })}
      onClick={
        onClick
          ? onClick
          : () => {
              console.log(`${iconName} missed a onclick prop`);
            }
      }
    />
  );
});

export {HoverIcons};
