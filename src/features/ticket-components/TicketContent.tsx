import {memo} from 'react';

import {Ticket} from '_shared/api/ticket-list';
import {Input} from '_shared/input';
import {MDEditor} from '_shared/md-editor';
import {getNamePath} from '_utils/hooks/useForm';

import {WithCommonActions} from './WithCommonActions';

const formPath = getNamePath<Ticket>();

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача'
};

const TicketContent = memo(function TicketContent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.type}</div>
          <WithCommonActions>
            <Input name={formPath('type')} className="w-[320px]" />
          </WithCommonActions>
        </div>
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.name}</div>
          <WithCommonActions>
            <Input name={formPath('name')} className="w-[320px]" />
          </WithCommonActions>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-bold-2">{PAGE_HEADINGS.context}</div>
        <WithCommonActions className="justify-between">
          <MDEditor name={formPath('context')} placeholder="Введите текст..." />
        </WithCommonActions>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-bold-2">{PAGE_HEADINGS.task}</div>
        <WithCommonActions className="justify-between">
          <MDEditor name={formPath('task')} placeholder="Введите текст..." />
        </WithCommonActions>
      </div>
    </div>
  );
});

export {TicketContent};
