import {Form} from 'antd';
import {assign} from 'lodash';
import {memo, useCallback, useEffect} from 'react';

import {Ticket, upsertTicket, useGetTicket} from '_shared/api/kanbanchik';
import {Sidebar} from '_shared/sidebar';
import {useQuery} from '_utils/hooks/useQuery';

import {TicketFooter} from './TicketFooter';
import {TicketSidebarContent} from './TicketSidebarContent';

const TicketSidebar = memo(function TicketSidebar() {
  const {values, mergeParams, removeParams} = useQuery({ticketId: value => value});
  const {data, mutate} = useGetTicket(values.ticketId);

  const handleCloseSidebar = useCallback(() => {
    removeParams(['ticketId']);
  }, [removeParams]);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data?.data);
  }, [form, data]);

  const handleUpsertTicket = useCallback(
    async (formTicket: Ticket) => {
      const id = values.ticketId === 'create' ? undefined : formTicket.task_id;
      await upsertTicket(
        assign({}, formTicket, {
          task_id: id,
          planned_sp: formTicket.planned_sp ? Number(formTicket.planned_sp) : undefined,
          spent_sp: formTicket.spent_sp ? Number(formTicket.spent_sp) : undefined
        })
      );

      mergeParams({ticketId: id});
      mutate();
    },
    [values.ticketId, mergeParams, mutate]
  );

  return (
    <Form onFinish={handleUpsertTicket} form={form}>
      <Sidebar
        isOpen={!!values.ticketId}
        onClose={handleCloseSidebar}
        footer={<TicketFooter submitForm={form.submit} />}
      >
        <TicketSidebarContent />
      </Sidebar>
    </Form>
  );
});

export {TicketSidebar};
