import {memo} from 'react';

import {TableItemPropsType} from './types';

const Head = memo<TableItemPropsType>(function Head({children}) {
  return <thead className="odd:text-bold-2">{children}</thead>;
});
export default Head;
