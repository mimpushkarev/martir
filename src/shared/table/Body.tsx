import {memo} from 'react';

import {TableItemPropsType} from './types';

const Body = memo<TableItemPropsType>(function Body({children}) {
  return <tbody>{children}</tbody>;
});
export default Body;
