import {memo} from 'react';

import {cn} from '@utils/cn';

import {RowPropsType} from './types';

const Row = memo<RowPropsType>(function Row({children, className}) {
  return (
    <tr
      className={cn('divide-x divide-common-gray border-b border-common-gray hover:bg-common-darkest-gray', {
        [className as string]: !!className
      })}
    >
      {children}
    </tr>
  );
});
export default Row;
