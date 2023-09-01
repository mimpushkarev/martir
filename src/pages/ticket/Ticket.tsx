import {FC, memo} from 'react';
import useSWR from 'swr';

import {getTicketList} from '_shared/api/ticket-list';
import {Container} from '_shared/container';
import TextField from '_shared/text-field/TextField';
import {getLastPathURL} from '_utils/getLastPartURL';

type TicketPageType = FC<{}>;

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача',
  comments: 'Комментарии'
};

const Ticket = memo<TicketPageType>(function Ticket() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);
  const ticket_id = getLastPathURL();
  console.log(ticket_id);
  const current_ticket = data && data.find(ticket => ticket.id === ticket_id);

  return (
    <div>
      <Container className="px-24">
        {current_ticket ? (
          <div>
            <div>{`[${current_ticket.type.toLocaleUpperCase()}] #${current_ticket.id}`}</div>
            <div>
              <div>{PAGE_HEADINGS.type}</div>
              <TextField value={current_ticket.type} onChange={() => {}} />
            </div>
            <div>
              <div>{PAGE_HEADINGS.name}</div>
              <TextField value={current_ticket.name} onChange={() => {}} />
            </div>
            <div>
              <div>{PAGE_HEADINGS.context}</div>
              <div>{current_ticket.context}</div>
            </div>
            <div>
              <div>{PAGE_HEADINGS.task}</div>
              <div>{current_ticket.context}</div>
            </div>
            <div>
              <div>{PAGE_HEADINGS.comments}</div>
            </div>
          </div>
        ) : (
          <div>Задача не найдена</div>
        )}
      </Container>
    </div>
  );
});
export default Ticket;
