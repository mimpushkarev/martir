import {memo} from 'react';

import {Ticket} from '_shared/api/kanbanchik';
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

// TODO сделать отдельный компонент StateSelect
const STATE_OPTIONS = [
  {
    label: 'Открыт',
    value: 'opened'
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

// TODO сделать отдельный компонент UserSelect
function transformArray(arr: {id: string; image: string; name: string}[]) {
  return arr.map(item => ({
    value: item.id,
    label: item.name,
    photo: item.image ?? ''
  }));
}

const transformPerformersToOptions = transformArray(PERFORMERS_ARRAY);

type TicketParamsType = {};

const TicketParams = memo<TicketParamsType>(function TicketParams() {
  return (
    <div className="flex flex-col gap-y-5">
      <FormGroup label={PARAMS_TEXT.state}>
        <Select id="status" name={formPath('status_task')} options={STATE_OPTIONS} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.author}>
        <Select name={formPath('author_id')} options={transformPerformersToOptions} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.performer}>
        <Select name={formPath('executor_id')} options={transformPerformersToOptions} />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.watcher}>
        <Select name={formPath('watchers')} options={transformPerformersToOptions} isMulti />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp_rated}>
        <Input name={formPath('planned_sp')} className="w-full" placeholder="0" />
      </FormGroup>
      <FormGroup label={PARAMS_TEXT.sp}>
        <Input name={formPath('spent_sp')} className="w-full" placeholder="0" />
      </FormGroup>
    </div>
  );
});

export {TicketParams};
