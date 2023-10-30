import {memo, useCallback} from 'react';

import {Ticket} from '_shared/api/ticket-list';
import {Input} from '_shared/input';
import {MDEditor} from '_shared/md-editor';
import {copyToClipboard} from '_utils/copy';
import {getNamePath} from '_utils/hooks/useForm';

import {WithCommonActions} from './WithCommonActions';

const formPath = getNamePath<Ticket>();

const PAGE_HEADINGS = {
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача'
};

type TicketContentPropsType = {
  ticket: Ticket;
};

const TicketContent = memo(function TicketContent({ticket}: TicketContentPropsType) {
  const handleCopyType = useCallback(() => copyToClipboard(ticket.type), [ticket.type]);
  const handleCopyName = useCallback(() => copyToClipboard(ticket.name), [ticket.name]);
  const handleCopyContext = useCallback(() => copyToClipboard(ticket.context), [ticket.context]);
  const handleCopyTask = useCallback(() => copyToClipboard(ticket.task), [ticket.task]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.type}</div>
          <WithCommonActions onCopy={handleCopyType}>
            <Input name={formPath('type')} className="w-[320px]" />
          </WithCommonActions>
        </div>
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.name}</div>
          <WithCommonActions onCopy={handleCopyName}>
            <Input name={formPath('name')} className="w-[320px]" />
          </WithCommonActions>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="items-center" onCopy={handleCopyContext}>
          <div className="text-bold-2">{PAGE_HEADINGS.context}</div>
        </WithCommonActions>
        <MDEditor name={formPath('context')} placeholder="Введите текст..." />
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="items-center" onCopy={handleCopyTask}>
          <div className="text-bold-2">{PAGE_HEADINGS.task}</div>
        </WithCommonActions>
        <MDEditor name={formPath('task')} placeholder="Введите текст..." />
      </div>
    </div>
  );
});

export {TicketContent};
