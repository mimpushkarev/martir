import {FC, memo} from 'react';

import {TicketTable} from '_features/ticket-table';
import {TicketSidebar} from '_widgets/ticket-sidebar';

type TicketBoardType = FC<Record<string, never>>;

const TicketBoard = memo<TicketBoardType>(function TicketBoard() {
  return (
    <>
      <TicketTable />
      <TicketSidebar />
    </>
  );
});
export default TicketBoard;
