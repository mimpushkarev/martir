import {useField, withFormik} from 'formik';
import {memo, useMemo} from 'react';
import useSWR from 'swr';

import {TicketColumn} from '_entities/ticket-column';
import {getTicketList} from '_shared/api/ticket-list';
import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {Input} from '_shared/input';

const TicketTable = withFormik({
  mapPropsToValues: () => ({
    search: ''
  }),
  handleSubmit: () => undefined
})(
  memo(function TicketTable() {
    const {data} = useSWR('GET_RELEASES_lIST', getTicketList);
    const [field] = useField('search');

    const dataByStatuses = useMemo(
      () =>
        (data || []).reduce((acc, item) => {
          if (item.name.toLowerCase().includes(field.value.toLowerCase())) {
            acc[item.status] = [...(acc[item.status] ?? []), item];
          }
          return acc;
        }, {}),
      [data, field.value]
    );

    return (
      <div className="flex w-full flex-col gap-6">
        <Container px={6} py={3} className="w-full">
          <div className="flex w-full justify-between">
            <Input name="search" placeholder="Введите название задачи" className="w-[300px]" />
            <Button
              type="primary"
              onClick={() => {
                alert('Пока нельзя задачи создавать :(');
              }}
            >
              Создать задачу
            </Button>
          </div>
        </Container>
        <Container px={6} className="flex w-full gap-9 overflow-auto">
          <TicketColumn columnHeading={'Открыты'} tickets={dataByStatuses['открыт']} />
          <TicketColumn columnHeading={'В работе'} tickets={dataByStatuses['в работе']} />
          <TicketColumn columnHeading={'На проверке'} tickets={dataByStatuses['ожидает подтверждения']} />
          <TicketColumn columnHeading={'Закрыты'} tickets={dataByStatuses['решен']} />
        </Container>
      </div>
    );
  })
);
export {TicketTable};
