import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import {memo, useCallback} from 'react';

import {HoverIcon} from '_shared/hover-icon';
import {copyToClipboard} from '_utils/copy';

import {TicketHeaderType} from './types';

const TicketHeader = memo<TicketHeaderType>(function TicketHeader({type, id}) {
  const ticket = `[${type}] #${id}`;

  const handleCopyToClipboard = useCallback(() => {
    copyToClipboard(ticket);
  }, [type, id, ticket]);

  return (
    <div className="flex items-center gap-6">
      <div className="text-page-title uppercase">{ticket}</div>
      <HoverIcon onClick={handleCopyToClipboard}>
        <CopyIcon className="h-6 w-6" />
      </HoverIcon>
    </div>
  );
});

export {TicketHeader};
