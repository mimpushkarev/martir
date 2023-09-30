import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import {memo} from 'react';

import {HoverIcon} from '_shared/hover-icon';

import {TicketHeaderType} from './types';

const TicketHeader = memo<TicketHeaderType>(function TicketHeader({type, id}) {
  return (
    <div className="flex items-center gap-6">
      <div className="text-page-title uppercase">
        [{type}] #{id}
      </div>
      <HoverIcon>
        <CopyIcon className="h-6 w-6" />
      </HoverIcon>
    </div>
  );
});

export {TicketHeader};
