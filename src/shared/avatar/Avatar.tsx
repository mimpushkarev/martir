import {memo} from 'react';

import {cn} from '_utils/cn';

type AvatarPropsType = {
  src: string;
  alt: string;
  size?: 'xsm' | 'sm' | 'md' | 'lg';
};

const Avatar = memo<AvatarPropsType>(function Avatar({src, alt, size = 'md'}) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={cn('rounded-full bg-common-light-gray', {
          'h-6 min-h-[24px] w-6 min-w-[24px]': size === 'xsm',
          'h-8 min-h-[32px] w-8 min-w-[32px]': size === 'sm',
          'h-12 min-h-[48px] w-12 min-w-[48px]': size === 'md',
          'h-24 min-h-[96px] w-24 min-w-[96px]': size === 'lg'
        })}
      />
    </div>
  );
});

export {Avatar};
