import {memo} from 'react';

import {TicketButton} from '_entities/ticket-card';
import {Ticket} from '_shared/api/ticket-list';
import {Avatar} from '_shared/avatar';
import Select from '_shared/select/Select';
import TextField from '_shared/text-field/TextField';
import {PERFORMERS_AND_DATA, PERFORMERS_ARRAY} from '_utils/mock';

type TicketParamsType = {
  ticket: Ticket;
};

const PARAMS_TEXT = {
  style: 'text-bold',
  state: 'Статус',
  author: 'Автор',
  performer: 'Исполнитель',
  watcher: 'Наблюдатели',
  sp_rated: 'Запланировано SP',
  sp: 'Потрачено SP'
};

function transformArray(
  arr: {id: string; image: string; name: string}[]
): {id: string; optionTitle: string; photo?: string}[] {
  return arr.map(item => ({
    id: item.id,
    optionTitle: item.name,
    photo: item.image
  }));
}

const transformPerformersToOptions = transformArray(PERFORMERS_ARRAY);

const TicketParams = memo<TicketParamsType>(function TicketParams({ticket}) {
  return (
    <div className="grid grid-cols-2 gap-x-9 gap-y-5 border-l pl-9">
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.state}</div>
      <TicketButton status={ticket.status} status_change={ticket.status_change} isStatusChangeTimeShown={true} />
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.author}</div>
      <div className="flex gap-2">
        <Avatar
          src={PERFORMERS_AND_DATA[ticket.author].image}
          alt={PERFORMERS_AND_DATA[ticket.author].name}
          size="xsm"
        />
        <p>{PERFORMERS_AND_DATA[ticket.author].name}</p>
      </div>
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.performer}</div>
      <div>
        <Select options={transformPerformersToOptions} />
      </div>
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.watcher}</div>
      <div>
        <div className="mb-3 flex gap-2">
          <Avatar
            src={PERFORMERS_AND_DATA[ticket.watcher].image}
            alt={PERFORMERS_AND_DATA[ticket.watcher].name}
            size="xsm"
          />
          <div>{PERFORMERS_AND_DATA[ticket.watcher].name}</div>
        </div>
        <div>
          <Select options={transformPerformersToOptions} />
        </div>
      </div>
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.sp_rated}</div>
      <TextField value={ticket.sp_rated?.toString() || '0'} />
      <div className={PARAMS_TEXT.style}>{PARAMS_TEXT.sp}</div>
      <TextField value={ticket.sp?.toString() || '0'} />
    </div>
  );
});

export default TicketParams;
