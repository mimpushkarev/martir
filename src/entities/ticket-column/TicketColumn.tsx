import {memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {TicketCard} from '_entities/ticket-card';
import {useQuery} from '_utils/hooks/useQuery';

import {TicketColumnPropsType} from './types';

const TicketColumn = memo<TicketColumnPropsType>(function TicketColumn({columnHeading, tickets = []}) {
  const {mergeParams} = useQuery({});

  const handleOpenSidebar = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      mergeParams({ticketId: id});
    },
    [mergeParams]
  );

  return (
    <div>
      <div className="flex min-w-[300px] flex-col gap-4">
        <div className="flex gap-4 border-b border-common-light-gray pb-2 text-bold-2">
          <h1>{columnHeading}</h1>
          <div>{tickets.length}</div>
        </div>
        <div className="flex flex-col gap-2">
          {tickets.map(ticket => (
            <Link key={ticket.id} onClick={handleOpenSidebar(ticket.id)} to={ticket.id}>
              <TicketCard ticket={ticket} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
export {TicketColumn};
