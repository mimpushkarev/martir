import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import {PropsWithChildren, memo} from 'react';

import {HoverIcon} from '_shared/hover-icon';
import {cn} from '_utils/cn';

type WithCommonActionsPropsType = PropsWithChildren & {
  className?: string;
  onCopy?: () => void;
};

const WithCommonActions = memo<WithCommonActionsPropsType>(function WithCommonActions({className, children, onCopy}) {
  return (
    <div
      className={cn('flex items-start gap-3', {
        [className]: !!className
      })}
    >
      {children}
      {onCopy && (
        <div className="flex gap-3">
          <HoverIcon onClick={onCopy}>
            <CopyIcon className="h-6 w-6" />
          </HoverIcon>
        </div>
      )}
    </div>
  );
});

export {WithCommonActions};
