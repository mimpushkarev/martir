import {memo} from 'react';

import {TicketCard} from '_entities/ticket-card';
import {Sidebar} from '_shared/sidebar';
import {useQuery} from '_utils/hooks/useQuery';

import {TicketColumnPropsType} from './types';

const TicketColumn = memo<TicketColumnPropsType>(function TicketColumn({columnHeading, tickets = []}) {
  const {mergeParams, removeParams, values} = useQuery({ticketId: value => value});
  const getTicketInfo = (id: string) => {
    mergeParams({ticketId: id});
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 border-b border-common-light-gray pb-2 text-bold-2">
          <h1>{columnHeading}</h1>
          <div>{tickets.length}</div>
        </div>
        <div className="flex flex-col gap-2">
          {tickets.map(ticket => (
            <div key={ticket.id} onClick={() => getTicketInfo(ticket.id)}>
              <TicketCard ticket={ticket} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Sidebar isOpen={!!values.ticketId} onClose={() => removeParams(['ticketId'])}>
          <div className="text-header">Сайдбар для задачи с номером {values.ticketId}</div>
        </Sidebar>
      </div>
    </div>
  );
});
export {TicketColumn};
