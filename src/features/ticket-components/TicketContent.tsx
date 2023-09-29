import {memo} from 'react';

import {Input} from '_shared/input';

import {WithCommonActions} from './WithCommonActions';
import {TicketContentType} from './types';

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача'
};

const TicketContent = memo<TicketContentType>(function TicketContent({context, task}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.type}</div>
          <WithCommonActions>
            <Input name="type" className="w-[320px]" />
          </WithCommonActions>
        </div>
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.name}</div>
          <WithCommonActions>
            <Input name="name" className="w-[320px]" />
          </WithCommonActions>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="justify-between">
          <div className="text-bold-2">{PAGE_HEADINGS.context}</div>
        </WithCommonActions>
        <div>{context}</div>
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="justify-between">
          <div className="text-bold-2">{PAGE_HEADINGS.task}</div>
        </WithCommonActions>
        <div>{task}</div>
      </div>
    </div>
  );
});

export {TicketContent};
