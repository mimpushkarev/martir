import {memo} from 'react';

import {CommentPropsType} from './types';
import { PERFORMERS_AND_DATA } from '_utils/mock';
import { Avatar } from '_shared/avatar';

const Comment = memo<CommentPropsType>(function Comment({commentator, message}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <div>
          <Avatar src={PERFORMERS_AND_DATA[commentator].image} alt={PERFORMERS_AND_DATA[commentator].name} size='xsm'/>
        </div>
        <div>
          {PERFORMERS_AND_DATA[commentator].name}
        </div>
      </div>
        <div>
          {message}
        </div>
    </div>
  );
});

export {Comment};
