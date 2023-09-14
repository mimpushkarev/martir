import {memo} from 'react';

import {HoverIcons} from '.';
import LinkImg from './ticket-components-svg/ExternalLink.svg';
import {TicketHeaderType} from './types';

const TicketHeader = memo<TicketHeaderType>(function TicketHeader({type, id}) {
  return (
    <div className="flex items-center gap-6">
      <div className="text-page-title">
        [{type.toLocaleUpperCase()}] #{id}
      </div>
      <HoverIcons icon={LinkImg} iconName={type} />
    </div>
  );
});

export {TicketHeader};
