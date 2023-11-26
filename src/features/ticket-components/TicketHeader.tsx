import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import ExternalIcon from '@heroicons/react/outline/ExternalLinkIcon';
import {Tooltip} from 'antd';
import {memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {HoverIcon} from '_shared/hover-icon';
import {copyToClipboard} from '_utils/copy';

import {LABELS} from './consts';
import {TicketHeaderType} from './types';

const TicketHeader = memo<TicketHeaderType>(function TicketHeader({type, id}) {
  const handleCopyToClipboard = useCallback(() => {
    copyToClipboard(`${type.toUpperCase()}-${id}`);
  }, [type, id]);

  return (
    <div className="flex items-center gap-4">
      <div className="truncate text-page-title uppercase">
        [{type ?? ''}] #{id}
      </div>
      <div className="flex items-center gap-2">
        <Tooltip title={LABELS.COPY}>
          <HoverIcon onClick={handleCopyToClipboard}>
            <CopyIcon className="h-6 w-6" />
          </HoverIcon>
        </Tooltip>
        <Tooltip title={LABELS.OPEN_IN_NEW_TAB}>
          <Link to={id} target="_blank" className="!text-white">
            <HoverIcon>
              <ExternalIcon className="h-6 w-6" />
            </HoverIcon>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
});

export {TicketHeader};
