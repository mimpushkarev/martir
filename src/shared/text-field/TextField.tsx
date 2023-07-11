import {memo, useState} from 'react';

import {cn} from '@utils/cn';

import {TextFieldType} from './types';

const TextField: TextFieldType = ({placeholder, value, onChange, disabled}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={cn('relative', {
        ['opacity-50']: !!disabled
      })}
    >
      {placeholder && (
        <div
          className={cn(
            'pointer-events-none absolute left-2 top-2 text-common-light-gray transition duration-200 ease-in-out',
            {
              ['cursor-text opacity-0']: isFocused || !!value
            }
          )}
        >
          {placeholder}
        </div>
      )}
      <input
        id="input"
        type="text"
        value={value}
        disabled={disabled}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'h-10 w-full max-w-[300px] rounded border bg-common-bg px-2 py-2 text-paragraph text-white outline-none duration-200 ease-in-out hover:border-white',
          {
            ['cursor-text border-white shadow-md shadow-primary-normal']: isFocused,
            ['border-common-gray shadow-none']: !isFocused
          }
        )}
      />
    </div>
  );
};

export default memo(TextField);
