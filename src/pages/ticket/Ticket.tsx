import moment from 'moment';
import {memo} from 'react';

import {Comment} from '_entities/comment';
import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {useGetTicket} from '_shared/api/kanbanchik';
import {Container} from '_shared/container';
import {useForm} from '_utils/hooks/useForm';

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача',
  comments: 'Комментарии'
};

const COMMENTS = [];

const Ticket = memo(function Ticket() {
  const {data} = useGetTicket('');
  const ticket = data.data;
  const {Form} = useForm(ticket);

  return (
    <Container px={3} py={3}>
      {ticket ? (
        <Form onSubmit={() => {}}>
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-1 flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className=" -mb-4 text-small text-common-light-gray">
                  {ticket.create_at && <>Создано {moment(ticket.create_at).format('DD.MM.YYYY')}</>}
                  {ticket.update_at && <>, обновлено {moment(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}</>}
                </p>
                <TicketHeader type={ticket.type} id={ticket.task_id} />
                <TicketContent ticket={ticket} />
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-bold-2">
                  {PAGE_HEADINGS.comments} {COMMENTS.length}
                </div>
                <div className="flex flex-col gap-4">
                  {COMMENTS.map((comment, index) => (
                    <Comment key={index} commentator={comment.commentator} message={comment.message} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-5/12 self-start">
              <div className="border-l pl-8">
                <TicketParams />
              </div>
            </div>
          </div>
        </Form>
      ) : (
        <div>Задача не найдена</div>
      )}
    </Container>
  );
});
export default Ticket;
