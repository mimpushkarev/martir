import {memo} from 'react';

import {cn} from '_utils/cn';

import {ButtonPropsType} from './types';

const Button = memo<ButtonPropsType>(function Button({children, theme, state, ...props}) {
  return (
    <button
      {...props}
      disabled={props.disabled || state === 'disabled'}
      className={cn(
        'rounded px-5 py-2 text-paragraph duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
        {
          // primary
          ['bg-primary-normal text-white hover:bg-primary-light']: theme === 'primary',
          ['bg-success-normal text-black hover:bg-success-light']: theme === 'success',
          ['bg-danger-normal text-white hover:bg-danger-light']: theme === 'danger',
          ['bg-warning-normal text-black hover:bg-warning-light']: theme === 'warning',
          // outlined
          ['border-2 border-common-mate-glass text-white hover:border-common-white']: theme === 'outlined',
          ['border-2 border-primary-normal text-white hover:border-primary-light']: theme === 'outlined-primary',
          ['border-2 border-danger-normal text-white hover:border-danger-light']: theme === 'outlined-danger',
          ['border-2 border-warning-normal text-white hover:border-warning-light']: theme === 'outlined-warning',
          ['border-2 border-success-normal text-white hover:border-success-light']: theme === 'outlined-success'
        }
      )}
    >
      {children}
    </button>
  );
});

export {Button};
