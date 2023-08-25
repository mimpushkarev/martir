import {FC, memo} from 'react';

import {TicketTable} from '_features/ticket-table';
import {Container} from '_shared/container';

type TicketBoardType = FC<{}>;

const TicketBoard = memo<TicketBoardType>(function TicketBoard() {
  return (
    <div>
      <Container className="">
        <TicketTable />
      </Container>
    </div>
  );
});
export default TicketBoard;
