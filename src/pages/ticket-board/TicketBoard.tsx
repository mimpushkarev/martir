import {FC, memo} from 'react';

import {TicketTable} from '_features/ticket-table';

type TicketBoardType = FC<Record<string, never>>;

const TicketBoard = memo<TicketBoardType>(function TicketBoard() {
  return <TicketTable />;
});
export default TicketBoard;
