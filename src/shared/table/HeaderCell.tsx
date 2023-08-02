import {memo} from 'react';

import {cn} from '@utils/cn';

import {TableItemPropsType} from './types';

const HeaderCell = memo<TableItemPropsType>(function Head({children, className}) {
  return (
    <th
      className={cn('px-6 py-5 text-left', {
        [className as string]: !!className
      })}
    >
      {children}
    </th>
  );
});
export default HeaderCell;
