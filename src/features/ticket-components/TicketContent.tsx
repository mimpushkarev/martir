import {memo} from 'react';

import {Input} from '_shared/input';
import {TextArea} from '_shared/text-area';

import {WithCommonActions} from './WithCommonActions';

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
        <div className="text-bold-2">{PAGE_HEADINGS.context}</div>
        <div>
          <div className="flex items-start justify-between gap-3">
            <WithCommonActions>
              <TextArea name="context" className="h-60 flex-1" />
            </WithCommonActions>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-bold-2">{PAGE_HEADINGS.task}</div>
        <div>
          <div className="flex items-start justify-between gap-3">
            <WithCommonActions>
              <TextArea name="task" className="flex-1" />
            </WithCommonActions>
          </div>
        </div>
      </div>
    </div>
  );
});

export {TicketContent};
