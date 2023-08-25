import {memo} from 'react';
import useSWR from 'swr';

import {TicketColumn} from '_entities/ticket-column';
import {getTicketList} from '_shared/api/ticket-list';

const TicketTable = memo(function TicketTable() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);

  return (
    <div className="flex justify-between gap-9">
      <TicketColumn columnHeading={'Открыт'} tickets={data} />
      <TicketColumn columnHeading={'В работе'} tickets={data} />
      <TicketColumn columnHeading={'На проверке'} tickets={data} />
      <TicketColumn columnHeading={'Закрыт'} tickets={data} />
    </div>
  );
});
export {TicketTable};
