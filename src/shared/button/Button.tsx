import {memo} from 'react';

import {cn} from '_utils/cn';

import {ButtonPropsType} from './types';

const Button = memo<ButtonPropsType>(function Button({children, type, state, ...props}) {
  return (
    <button
      {...props}
      disabled={props.disabled || state === 'disabled'}
      className={cn(
        'rounded px-5 py-2 text-paragraph duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
        {
          // primary
          ['bg-primary-normal text-white hover:bg-primary-light']: type === 'primary',
          ['bg-success-normal text-black hover:bg-success-light']: type === 'success',
          ['bg-danger-normal text-white hover:bg-danger-light']: type === 'danger',
          ['bg-warning-normal text-black hover:bg-warning-light']: type === 'warning',
          // secondary
          ['border-2 border-common-mate-glass text-white hover:border-common-white']: type === 'secondary',
          ['border-2 border-primary-normal text-white hover:border-primary-light']: type === 'secondary-blue',
          ['border-2 border-[#BF0D4D] text-white hover:border-danger-light']: type === 'secondary-danger',
          ['border-2 border-warning-normal text-white hover:border-warning-light']: type === 'secondary-warning',
          ['border-2 border-success-normal text-white hover:border-success-light']: type === 'secondary-success'
        }
      )}
    >
      {children}
    </button>
  );
});

export {Button};
