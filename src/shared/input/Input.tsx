import {useField} from 'formik';
import {memo} from 'react';

import {cn} from '_utils/cn';
import {convertPathToName} from '_utils/hooks/useForm';

import {StatelessTextFieldPropsType, TextFieldPropsType} from './types';

export const Input = memo<TextFieldPropsType>(function Input({name, ...props}) {
  const [field, meta] = useField(convertPathToName(name));
  const {value, ...fieldProps} = field;

  return <StatelessInput {...fieldProps} {...props} value={value ?? ''} error={meta.error} />;
});

export const StatelessInput = memo<StatelessTextFieldPropsType>(function Input({className, error, ...props}) {
  return (
    <input
      {...props}
      className={cn(
        'min-h-[40px] rounded border border-common-gray bg-common-bg px-2 py-1.5 text-paragraph text-white shadow-none outline-none duration-200 ease-in-out hover:border-white focus:border-white focus:shadow-md focus:shadow-primary-normal disabled:opacity-50',
        {
          ['border-danger-light']: !!error,
          [className as string]: !!className
        }
      )}
    />
  );
});
