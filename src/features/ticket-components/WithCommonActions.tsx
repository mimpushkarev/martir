import {PropsWithChildren, memo} from 'react';

import {cn} from '_utils/cn';

import {HoverIcons} from './HoverIcons';
import CopyIcon from './ticket-components-svg/Copy.svg';
import EditIcon from './ticket-components-svg/Edit.svg';

type WithCommonActionsPropsType = PropsWithChildren & {
  className?: string;
};

const WithCommonActions = memo<WithCommonActionsPropsType>(function WithCommonActions({className, children}) {
  return (
    <div
      className={cn('flex items-center gap-3', {
        [className]: !!className
      })}
    >
      {children}

      <div className="flex gap-3">
        <HoverIcons icon={EditIcon} iconName="Edit" />
        <HoverIcons icon={CopyIcon} iconName="Copy" />
      </div>
    </div>
  );
});

export {WithCommonActions};
