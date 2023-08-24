import {memo} from 'react';

import {TicketCard} from '_entities/ticket-card';

import {TicketColumnPropsType} from './types';

const TicketColumn = memo<TicketColumnPropsType>(function TicketColumn({columnHeading, tickets}) {
  return (
    <div>
      <h1>{columnHeading}</h1>
      <div className="flex flex-col gap-2">
        {(tickets || []).map(ticket => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
});
export {TicketColumn};
