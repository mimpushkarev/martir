import {memo} from 'react';

import {cn} from '_utils/cn';
import person from './person.svg';

type AvatarPropsType = {
  src: string;
  alt: string;
  size?: 'xsm'|'sm' | 'md' | 'lg';
};

const Avatar = memo<AvatarPropsType>(function Avatar({src, alt, size = 'md'}) {
  src = src === '' || undefined ? person : src;
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={cn('rounded-full bg-common-light-gray', {
          'h-6 w-6': size === 'xsm',
          'h-8 w-8': size === 'sm',
          'h-12 w-12': size === 'md',
          'h-24 w-24': size === 'lg'
        })}
      />
    </div>
  );
});

export {Avatar};
