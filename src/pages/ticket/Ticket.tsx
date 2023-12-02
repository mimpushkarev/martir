import {Form} from 'antd';
import dayjs from 'dayjs';
import {assign} from 'lodash';
import {memo, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {Comment} from '_entities/comment';
import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {Ticket, upsertTicket, useGetTicket} from '_shared/api/kanbanchik';
import {Container} from '_shared/container';

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача',
  comments: 'Комментарии'
};

const COMMENTS = [];

const Ticket = memo(function Ticket() {
  const {ticket_id} = useParams();
  const {data, mutate} = useGetTicket(ticket_id);
  const ticket = data?.data;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data?.data);
  }, [form, data]);

  const handleUpsertTicket = useCallback(
    async (formTicket: Ticket) => {
      const id = formTicket.task_id;
      await upsertTicket(
        assign({}, formTicket, {
          task_id: id,
          planned_sp: formTicket.planned_sp ? Number(formTicket.planned_sp) : undefined,
          spent_sp: formTicket.spent_sp ? Number(formTicket.spent_sp) : undefined
        })
      );

      mutate();
    },
    [mutate]
  );

  return (
    <Container px={3} py={3}>
      {ticket ? (
        <Form onFinish={handleUpsertTicket} form={form}>
          <div className="flex flex-row justify-between gap-8">
            <div className="flex w-7/12 flex-1 flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className=" -mb-4 text-small text-common-light-gray">
                  {ticket.create_at && <>Создано {dayjs(ticket.create_at).format('DD.MM.YYYY')}</>}
                  {ticket.update_at && <>, обновлено {dayjs(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}</>}
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
