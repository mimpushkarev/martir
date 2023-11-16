import dayjs from 'dayjs';
import {assign} from 'lodash';
import {memo, useCallback} from 'react';
import {v4 as uuidv4} from 'uuid';

import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {upsertTicket, useGetTicket} from '_shared/api/kanbanchik';
import {Sidebar, SidebarContainer, SidebarContent} from '_shared/sidebar';
import {useForm} from '_utils/hooks/useForm';
import {useQuery} from '_utils/hooks/useQuery';

import {TicketFooter} from './TicketFooter';

const TicketSidebar = memo(function TicketSidebar() {
  const {values, removeParams, mergeParams} = useQuery({ticketId: value => value});
  const {data, isLoading} = useGetTicket(values.ticketId);
  const ticket = data?.data;
  const {Form} = useForm(ticket);

  const handleCloseSidebar = useCallback(() => {
    const result = confirm('Форма имеет несохраненные изменения, закрыть сайдбар?');
    if (result) {
      removeParams(['ticketId']);
    }
  }, [removeParams]);

  const handleUpsertTicket = useCallback(
    async (formTicket: typeof ticket) => {
      const id = values.ticketId === 'create' ? uuidv4() : formTicket.task_id;
      await upsertTicket(
        assign({}, formTicket, {
          task_id: id,
          planned_sp: formTicket.planned_sp ? Number(formTicket.planned_sp) : undefined,
          spent_sp: formTicket.spent_sp ? Number(formTicket.spent_sp) : undefined
        })
      );

      mergeParams({ticketId: id});
    },
    [values.ticketId]
  );

  return (
    <Form onSubmit={handleUpsertTicket}>
      <Sidebar isOpen={!!values.ticketId} onClose={handleCloseSidebar}>
        <SidebarContent>
          <SidebarContainer>
            {ticket ? (
              <div className="flex flex-1 flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <p className="-mb-4 text-small text-common-light-gray">
                    {ticket.create_at && <>Создано {dayjs(ticket.create_at).format('DD.MM.YYYY')}</>}
                    {ticket.update_at !== ticket.create_at && (
                      <>, обновлено {dayjs(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}</>
                    )}
                  </p>
                  {values.ticketId !== 'create' && <TicketHeader type={ticket.type} id={ticket.task_id} />}
                  <TicketContent ticket={ticket} />
                </div>

                <TicketParams />

                <div className="flex flex-col gap-6">
                  {/* TODO Добавить логику получения комментариев по id таски */}
                  {/* <div className={PAGE_HEADINGS.style}>
                      {PAGE_HEADINGS.comments} {COMMENTS.length}
                    </div>
                    <div className="flex flex-col gap-4">
                      {COMMENTS.map((comment, index) => (
                        <Comment key={index} commentator={comment.commentator} message={comment.message} />
                      ))}
                    </div> */}
                </div>
              </div>
            ) : (
              <div>{isLoading ? 'Получаем данные...' : 'Задача не найдена'}</div>
            )}
          </SidebarContainer>
        </SidebarContent>
        <TicketFooter />
      </Sidebar>
    </Form>
  );
});

export {TicketSidebar};
