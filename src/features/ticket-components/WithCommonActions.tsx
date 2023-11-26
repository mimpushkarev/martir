import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import {Tooltip} from 'antd';
import {PropsWithChildren, memo} from 'react';

import {HoverIcon} from '_shared/hover-icon';
import {cn} from '_utils/cn';

import {LABELS} from './consts';

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
          <Tooltip title={LABELS.COPY}>
            <HoverIcon onClick={onCopy}>
              <CopyIcon className="h-5 w-5" />
            </HoverIcon>
          </Tooltip>
        </div>
      )}
    </div>
  );
});

export {WithCommonActions};
