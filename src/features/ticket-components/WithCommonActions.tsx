import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import EditIcon from '@heroicons/react/outline/PencilIcon';
import {PropsWithChildren, memo} from 'react';

import {HoverIcon} from '_shared/hover-icon';
import {cn} from '_utils/cn';

type WithCommonActionsPropsType = PropsWithChildren & {
  className?: string;
};

const WithCommonActions = memo<WithCommonActionsPropsType>(function WithCommonActions({className, children}) {
  return (
    <div
      className={cn('flex items-start gap-3', {
        [className]: !!className
      })}
    >
      {children}
      <div className="flex gap-3">
        <HoverIcon>
          <EditIcon className="h-6 w-6" />
        </HoverIcon>
        <HoverIcon>
          <CopyIcon className="h-6 w-6" />
        </HoverIcon>
      </div>
    </div>
  );
});

export {WithCommonActions};
