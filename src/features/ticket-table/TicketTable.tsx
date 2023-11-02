import {memo, useCallback, useMemo, useState} from 'react';
import useSWR from 'swr';

import {TicketColumn} from '_entities/ticket-column';
import {getTicketList} from '_shared/api/tracker/ticket-list';
import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {StatelessInput} from '_shared/input';
import {useQuery} from '_utils/hooks/useQuery';

const TicketTable = memo(function TicketTable() {
  const {mergeParams} = useQuery({});
  const [search, setSearch] = useState('');
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);

  const dataByStatuses = useMemo(
    () =>
      (data || []).reduce((acc, item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          acc[item.status] = [...(acc[item.status] ?? []), item];
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
          <StatelessInput
            placeholder="Введите название задачи"
            className="w-[300px]"
            value={search}
            onChange={handleChangeSearch}
          />
          <Button theme="primary" onClick={handleCreateTicket}>
            Создать задачу
          </Button>
        </div>
      </Container>
      <Container px={3} className="flex w-full gap-9 overflow-auto">
        <TicketColumn columnHeading={'Открыты'} tickets={dataByStatuses['открыт']} />
        <TicketColumn columnHeading={'В работе'} tickets={dataByStatuses['в работе']} />
        <TicketColumn columnHeading={'На проверке'} tickets={dataByStatuses['ожидает подтверждения']} />
        <TicketColumn columnHeading={'Закрыты'} tickets={dataByStatuses['решен']} />
      </Container>
    </div>
  );
});

export {TicketTable};
