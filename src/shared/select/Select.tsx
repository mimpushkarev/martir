import {Select as AntSelect} from 'antd';
import {memo} from 'react';

import {SelectPropsType} from './types';

const Select = memo<SelectPropsType>(function Select({...props}) {
  return <AntSelect {...props} mode={'isMulti' in props && props.isMulti ? 'multiple' : undefined} />;
});

export {Select};
