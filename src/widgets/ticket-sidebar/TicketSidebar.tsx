import moment from 'moment';
import {memo, useCallback} from 'react';
import useSWR from 'swr';

import {TicketContent, TicketHeader, TicketParams} from '_features/ticket-components';
import {getTicketList} from '_shared/api/ticket-list';
import {Button} from '_shared/button';
import {CREATE_TICKET_DATA} from '_shared/consts/ticket';
import {Sidebar, SidebarContainer, SidebarContent, SidebarFooter} from '_shared/sidebar';
import {useForm} from '_utils/hooks/useForm';
import {useQuery} from '_utils/hooks/useQuery';

const TicketSidebar = memo(function TicketSidebar() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);
  const {removeParams, values} = useQuery({ticketId: value => value});
  const currentTicket =
    values.ticketId === 'create' ? CREATE_TICKET_DATA : data && data.find(ticket => ticket.id === values.ticketId);
  const {Form} = useForm(currentTicket);

  const handleCloseSidebar = useCallback(() => {
    removeParams(['ticketId']);
  }, [removeParams]);

  return (
    <Sidebar isOpen={!!values.ticketId} onClose={handleCloseSidebar}>
      <SidebarContent>
        <SidebarContainer>
          {currentTicket ? (
            <Form onSubmit={() => {}}>
              <div className="flex flex-1 flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <p className="-mb-4 text-small text-common-light-gray">
                    {currentTicket.created && <>Создано {moment(currentTicket.created).format('DD.MM.YYYY')}</>}
                    {currentTicket.status_change && (
                      <>, обновлено {moment(currentTicket.status_change, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}</>
                    )}
                  </p>
                  {values.ticketId !== 'create' && <TicketHeader type={currentTicket.type} id={currentTicket.id} />}
                  <TicketContent ticket={currentTicket} />
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
            </Form>
          ) : (
            <div>Задача не найдена</div>
          )}
        </SidebarContainer>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContainer>
          <Button theme="primary" onClick={undefined}>
            Сохранить
          </Button>
        </SidebarContainer>
      </SidebarFooter>
    </Sidebar>
  );
});

export {TicketSidebar};
