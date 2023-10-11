import {memo, useState} from 'react';

import {TicketCard} from '_entities/ticket-card';
import {Sidebar} from '_shared/sidebar';

// import {Link} from '_shared/link';
import {TicketColumnPropsType} from './types';

const TicketColumn = memo<TicketColumnPropsType>(function TicketColumn({columnHeading, tickets = []}) {
  const writeCookie = (name: string, val: string, expires: number) => {
    const date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = name + '=' + val + '; path=/; expires=' + date.toUTCString();
  };

  const readCookie = (name: string) => {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([$?*|{}\]\\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const getTicketInfo = (id: string) => {
    writeCookie('currentTicket', id, 1);
    setIsOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 border-b border-common-light-gray pb-2 text-bold-2">
          <h1>{columnHeading}</h1>
          <div>{tickets.length}</div>
        </div>
        <div className="flex flex-col gap-2">
          {tickets.map(ticket => (
            // <Link to={`/admin/ticket-board/${ticket.id}`} target="_blank" className="text-common-white" key={ticket.id}>
            <div key={ticket.id} onClick={() => getTicketInfo(ticket.id)}>
              <TicketCard ticket={ticket} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {isOpen && (
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="text-header">Сайдбар для задачи с номером {readCookie('currentTicket')}</div>
          </Sidebar>
        )}
      </div>
    </div>
  );
});
export {TicketColumn};
