import {memo} from 'react';

import {TicketCard} from '_entities/ticket-card';

import {TicketColumnPropsType} from './types';

const TicketColumn = memo<TicketColumnPropsType>(function TicketColumn({columnHeading, tickets}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 border-b border-common-light-gray pb-2 text-bold-2">
        <h1>{columnHeading}</h1>
        <div>{tickets.length}</div>
      </div>
      <div className="flex flex-col gap-2">
        {(tickets || []).map(ticket => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
});
export {TicketColumn};
