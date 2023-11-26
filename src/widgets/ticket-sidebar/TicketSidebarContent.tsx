import {memo} from 'react';

import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {useGetTicket} from '_shared/api/kanbanchik';
import {useQuery} from '_utils/hooks/useQuery';
import {createTextCreateUpdate} from '_utils/times';

const TicketSidebarContent = memo(function TicketSidebarContent() {
  const {values} = useQuery({ticketId: value => value});
  const {data, isLoading} = useGetTicket(values.ticketId);
  const ticket = data?.data;

  return (
    <div className="flex flex-1 flex-col gap-10">
      {ticket ? (
        <>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-small text-common-light-gray">
                {createTextCreateUpdate(ticket.create_at, ticket.update_at)}
              </span>
              {values.ticketId !== 'create' && <TicketHeader type={ticket.type} id={ticket.task_id} />}
            </div>
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
        </>
      ) : (
        <>{isLoading ? 'Получаем данные...' : 'Задача не найдена'}</>
      )}
    </div>
  );
});

export {TicketSidebarContent};
