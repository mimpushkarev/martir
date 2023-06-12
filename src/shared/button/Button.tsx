import {memo} from 'react';

import {cn} from '@utils/cn';

import {ButtonPropsType} from './types';

const Button = memo<ButtonPropsType>(function Button({children, type, state, ...props}) {
  return (
    <button
      {...props}
      disabled={props.disabled || state === 'disabled'}
      className={cn(
        'text-paragraph px-5 py-2 rounded ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          ['bg-primary-normal text-white hover:bg-primary-light']: type === 'primary',
          ['bg-success-normal text-black hover:bg-success-light']: type === 'success',
          ['bg-danger-normal text-white hover:bg-danger-light']: type === 'danger',
          ['bg-warning-normal text-black hover:bg-warning-light']: type === 'warning'
        }
      )}
    >
      {children}
    </button>
  );
});

export {Button};
