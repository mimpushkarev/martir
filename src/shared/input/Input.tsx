import {useField} from 'formik';
import {memo} from 'react';

import {cn} from '_utils/cn';

import {TextFieldPropsType} from './types';

const Input = memo<TextFieldPropsType>(function Input({className, name, ...props}) {
  const [field, meta] = useField(name);

  return (
    <input
      {...field}
      {...props}
      className={cn(
        'min-h-[40px] rounded border border-common-gray bg-common-bg px-2 py-1.5 text-paragraph text-white shadow-none outline-none duration-200 ease-in-out hover:border-white focus:border-white focus:shadow-md focus:shadow-primary-normal disabled:opacity-50',
        {
          ['border-danger-light']: !!meta.error,
          [className as string]: !!className
        }
      )}
    />
  );
});

export {Input};
