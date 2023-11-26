import {Input as AntInput} from 'antd';
import {flatten} from 'lodash';
import {memo, useCallback, useMemo, useState} from 'react';

import {TicketColumn} from '_entities/ticket-column';
import {useGetTicketList} from '_shared/api/kanbanchik';
import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {useQuery} from '_utils/hooks/useQuery';

const TicketTable = memo(function TicketTable() {
  const {mergeParams} = useQuery({});
  const [search, setSearch] = useState('');
  const {data} = useGetTicketList();

  const dataByStatuses = useMemo(
    () =>
      flatten((data ?? []).map(response => response.data)).reduce((acc, item) => {
        if (item.name && item.name.toLowerCase().includes(search.toLowerCase())) {
          (acc[item.status_task] ||= []).push(item);
        }
        return acc;
      }, {}),
    [data, search]
  );

  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleCreateTicket = useCallback(() => {
    mergeParams({ticketId: 'create'});
  }, [mergeParams]);

  return (
    <div className="flex w-full flex-col gap-6">
      <Container px={3} py={3} className="w-full">
        <div className="flex w-full justify-between">
          <AntInput
            placeholder="Введите название задачи"
            className="w-[300px]"
            value={search}
            onChange={handleChangeSearch}
          />
          <Button onClick={handleCreateTicket}>Создать задачу</Button>
        </div>
      </Container>
      <Container px={3} className="flex w-full gap-9 overflow-auto">
        <TicketColumn columnHeading="Открыт" tickets={dataByStatuses['opened']} />
        <TicketColumn columnHeading="В работе" tickets={dataByStatuses['progress']} />
        <TicketColumn columnHeading="На проверке" tickets={dataByStatuses['review']} />
        <TicketColumn columnHeading="Закрыты" tickets={dataByStatuses['done']} />
      </Container>
    </div>
  );
});

export {TicketTable};
