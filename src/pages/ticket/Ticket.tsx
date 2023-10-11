import {Formik} from 'formik';
import moment from 'moment';
import {FC, memo} from 'react';
import useSWR from 'swr';

import {Comment} from '_entities/comment';
import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {getTicketList} from '_shared/api/ticket-list';
import {Container} from '_shared/container';
import {getLastPathURL} from '_utils/getLastPartURL';

type TicketPageType = FC<Record<string, never>>;

const PAGE_HEADINGS = {
  style: 'text-bold-2',
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача',
  comments: 'Комментарии'
};

const COMMENTS = [
  {
    commentator: 'hornyte@mail.ru',
    message: 'Замечание от hornyte@mail.ru по поводу первой задачи'
  },
  {
    commentator: 'vsemkiskampiece@gmail.com',
    message: 'Предложение от vsemkiskampiece@gmail.com по улучшению первой задачи'
  },
  {
    commentator: 'annaershova02@gmail.com',
    message: 'Отзыв от annaershova02@gmail.com о первой задаче'
  },
  {
    commentator: 'mimpushkarev@yandex.ru',
    message: 'Подсказка от mimpushkarev@yandex.ru по решению первой задачи'
  },
  {
    commentator: 'hornyte@mail.ru',
    message: 'Комментарий от hornyte@mail.ru по поводу второй задачи'
  },
  {
    commentator: 'vsemkiskampiece@gmail.com',
    message: 'Отзыв от vsemkiskampiece@gmail.com о второй задаче'
  },
  {
    commentator: 'annaershova02@gmail.com',
    message: 'Замечание от annaershova02@gmail.com по поводу второй задачи'
  },
  {
    commentator: 'mimpushkarev@yandex.ru',
    message: 'Предложение от mimpushkarev@yandex.ru по улучшению второй задачи'
  },
  {
    commentator: 'hornyte@mail.ru',
    message: 'Отзыв от hornyte@mail.ru о третьей задаче'
  },
  {
    commentator: 'vsemkiskampiece@gmail.com',
    message: 'Подсказка от vsemkiskampiece@gmail.com по решению третьей задачи'
  },
  {
    commentator: 'annaershova02@gmail.com',
    message: 'Замечание от annaershova02@gmail.com по поводу третьей задачи'
  },
  {
    commentator: 'mimpushkarev@yandex.ru',
    message: 'Отзыв от mimpushkarev@yandex.ru о третьей задаче'
  }
];
const Ticket = memo<TicketPageType>(function Ticket() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);
  const ticket_id = getLastPathURL();
  const current_ticket = data && data.find(ticket => ticket.id === ticket_id);

  return (
    <Container px={6} py={3}>
      {current_ticket ? (
        <Formik initialValues={current_ticket} onSubmit={() => undefined}>
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-1 flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className=" -mb-4 text-small text-common-light-gray">
                  Создано {moment(current_ticket.created).format('DD.MM.YYYY')}, обновлено{' '}
                  {moment(current_ticket.status_change, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}
                </p>
                <TicketHeader type={current_ticket.type} id={current_ticket.id} />
                <TicketContent />
              </div>
              <div className="flex flex-col gap-6">
                <div className={PAGE_HEADINGS.style}>
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
                <TicketParams ticket={current_ticket} />
              </div>
            </div>
          </div>
        </Formik>
      ) : (
        <div>Задача не найдена</div>
      )}
    </Container>
  );
});
export default Ticket;
