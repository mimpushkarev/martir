import {memo} from 'react';

import {Ticket} from '_shared/api/tracker/ticket-list';
import {Input} from '_shared/input';
import {Select} from '_shared/select';
import {getNamePath} from '_utils/hooks/useForm';
import {PERFORMERS_ARRAY} from '_utils/mock';

import {FormGroup} from './FormGroup';

const formPath = getNamePath<Ticket>();

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
    photo: item.image ?? ''
  }));
}

const transformPerformersToOptions = transformArray(PERFORMERS_ARRAY);

type TicketParamsType = {};

const TicketParams = memo<TicketParamsType>(function TicketParams({}) {
  return (
    <div className="flex flex-col gap-y-5">
      <FormGroup label={PARAMS_TEXT.state}>
        <Select id="status" name={formPath('status')} options={optionsForState} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.author}>
        <Select name={formPath('author')} options={transformPerformersToOptions} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.performer}>
        <Select name={formPath('performer')} options={transformPerformersToOptions} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.watcher}>
        <Select name={formPath('watcher')} options={transformPerformersToOptions} isMulti />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp_rated}>
        <Input name={formPath('sp_rated')} className="w-full" placeholder="0" />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp}>
        <Input name={formPath('sp')} className="w-full" placeholder="0" />
      </FormGroup>
    </div>
  );
});

export {TicketParams};
