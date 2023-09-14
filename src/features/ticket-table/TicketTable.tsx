import {memo, useEffect, useState} from 'react';
import useSWR from 'swr';

import {TicketColumn} from '_entities/ticket-column';
import {getTicketList} from '_shared/api/ticket-list';
// import {SearchInput} from '_shared/search-input';
import TextField from '_shared/text-field/TextField';

const TicketTable = memo(function TicketTable() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);
  const [query, setQuery] = useState('');

  let openTickets = (data || []).filter(ticket => {
    ticket.status === 'открыт' && ticket.name.toLowerCase().includes(query.toLowerCase());
  });
  let inProgressTickets = (data || []).filter(ticket => ticket.status === 'в работе');
  let waitForConfirmTickets = (data || []).filter(ticket => ticket.status === 'ожидает подтверждения');
  let closedTickets = (data || []).filter(ticket => ticket.status === 'решен');

  const handleSearch = query => {
    openTickets = openTickets.filter(ticket => ticket.name.toLowerCase().includes(query));
    inProgressTickets = inProgressTickets.filter(ticket => ticket.name.toLocaleLowerCase().includes(query));
    waitForConfirmTickets = waitForConfirmTickets.filter(ticket => ticket.name.toLocaleLowerCase().includes(query));
    closedTickets = closedTickets.filter(ticket => ticket.name.toLocaleLowerCase().includes(query));
  };

  return (
    <div>
      {/* <SearchInput onSearch={query => handleSearch(query)} /> */}
      <TextField value={'эээ'} onChange={e => setQuery(e.target.value)} />
      <div className="grid grid-cols-4 gap-9">
        <TicketColumn columnHeading={'Открыты'} tickets={openTickets} />
        <TicketColumn columnHeading={'В работе'} tickets={inProgressTickets} />
        <TicketColumn columnHeading={'На проверке'} tickets={waitForConfirmTickets} />
        <TicketColumn columnHeading={'Закрыты'} tickets={closedTickets} />
      </div>
    </div>
  );
});
export {TicketTable};
