import {memo} from 'react';

import {TableItemPropsType} from './types';

const Table = memo<TableItemPropsType>(function Table({children}) {
  return <table className="table-auto">{children}</table>;
});
export default Table;
