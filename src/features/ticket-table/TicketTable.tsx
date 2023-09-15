import {memo, useMemo, useState} from 'react';
import useSWR from 'swr';

import {TicketColumn} from '_entities/ticket-column';
import {getTicketList} from '_shared/api/ticket-list';
import {Button} from '_shared/button';
import TextField from '_shared/text-field/TextField';
import searchImage from './Search.svg';

const TicketTable = memo(function TicketTable() {
  const {data} = useSWR('GET_RELEASES_lIST', getTicketList);

  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => setSearch(value);

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

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full justify-between">
        <div className="w-1/3">
          <TextField value={search} onChange={handleSearch} placeholder="Введите название задачи" svg={searchImage}/>
        </div>
        <Button
          type="primary"
          onClick={() => {
            confirm('Пока нельзя задачи создавать :(');
          }}
        >
          Создать задачу
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-9">
        <TicketColumn columnHeading={'Открыты'} tickets={dataByStatuses['открыт']} />
        <TicketColumn columnHeading={'В работе'} tickets={dataByStatuses['в работе']} />
        <TicketColumn columnHeading={'На проверке'} tickets={dataByStatuses['ожидает подтверждения']} />
        <TicketColumn columnHeading={'Закрыты'} tickets={dataByStatuses['решен']} />
      </div>
    </div>
  );
});
export {TicketTable};
