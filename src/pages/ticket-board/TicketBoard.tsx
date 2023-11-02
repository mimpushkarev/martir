import {FC, memo} from 'react';

import {TicketTable} from '_features/ticket-table';
import {useQuery} from '_utils/hooks/useQuery';
import {TicketSidebar} from '_widgets/ticket-sidebar';

type TicketBoardType = FC<Record<string, never>>;

const TicketBoard = memo<TicketBoardType>(function TicketBoard() {
  const {values} = useQuery({ticketId: value => value});

  return (
    <>
      <TicketTable />
      {values.ticketId && <TicketSidebar />}
    </>
  );
});
export default TicketBoard;
