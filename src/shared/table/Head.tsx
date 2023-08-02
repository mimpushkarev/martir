import {memo} from 'react';

import {cn} from '@utils/cn';

import {TableItemPropsType} from './types';

const Head = memo<TableItemPropsType>(function Head({children, className}) {
  return <thead className={cn('odd:text-bold-2', {[className as string]: !!className})}>{children}</thead>;
});
export default Head;
