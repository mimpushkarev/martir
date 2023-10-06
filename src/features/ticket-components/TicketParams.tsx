import {memo} from 'react';

import {Ticket} from '_shared/api/ticket-list';
import {Avatar} from '_shared/avatar';
import {Input} from '_shared/input';
import {Select} from '_shared/select';
import {PERFORMERS_AND_DATA, PERFORMERS_ARRAY} from '_utils/mock';

import {FormGroup} from './FormGroup';

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

const optionsForState = [
  {
    label: 'Открыт',
    value: 'открыт'
  },
  {
    label: 'В работе',
    value: 'in-progress'
  },
  {
    label: 'На проверке',
    value: 'in-review'
  },
  {
    label: 'Закрыт',
    value: 'done'
  }
];

function transformArray(arr: {id: string; image: string; name: string}[]) {
  return arr.map(item => ({
    value: item.id,
    label: item.name,
    photo: item.image
  }));
}

const transformPerformersToOptions = transformArray(PERFORMERS_ARRAY);

const TicketParams = memo<TicketParamsType>(function TicketParams({ticket}) {
  return (
    <div className="flex flex-col gap-y-5">
      <FormGroup label={PARAMS_TEXT.state}>
        <Select id="status" name="status" options={optionsForState} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.author}>
        <div className="flex gap-2">
          <Avatar
            src={PERFORMERS_AND_DATA[ticket.author].image}
            alt={PERFORMERS_AND_DATA[ticket.author].name}
            size="xsm"
          />

          <p>{PERFORMERS_AND_DATA[ticket.author].name}</p>
        </div>
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.performer}>
        <Select name="performer" options={transformPerformersToOptions} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.watcher}>
        <Select name="watcher" options={transformPerformersToOptions} isMulti />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp_rated}>
        <Input name="sp_rated" />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp}>
        <Input name="sp" />
      </FormGroup>
    </div>
  );
});

export {TicketParams};
