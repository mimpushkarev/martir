import {memo} from 'react';

import {CheckIcon} from '@heroicons/react/20/solid';

import {CheckBoxType} from './types';

const CheckBox: CheckBoxType = () => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="checkbox-component" className="relative cursor-pointer">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded border-[1px] border-common-gray accent-common-bg">
          <input
            id="checkbox-component"
            type="checkbox"
            className="absolute z-[-1] h-[30px] w-[30px] appearance-none rounded border-[1px] border-common-gray accent-common-bg opacity-0"
          />
          <CheckIcon className="check-1 h-[25px] w-[25px] text-header text-white text-opacity-0 transition duration-200 ease-in-out" />
        </div>
      </label>
    </div>
  );
};

export default memo(CheckBox);
