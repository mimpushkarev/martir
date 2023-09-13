import {memo} from 'react';

import TextField from '_shared/text-field/TextField';

import {HoverIcons} from '.';
import CopyIcon from './ticket-components-svg/Copy.svg';
import EditIcon from './ticket-components-svg/Edit.svg';
import {TicketContentType} from './types';

const PAGE_HEADINGS = {
  style: 'text-bold-2',
  type: 'Тип задачи',
  name: 'Название задачи',
  context: 'Контекст',
  task: 'Задача'
};

const TicketContent = memo<TicketContentType>(function TicketContent({type, name, context, task}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.type}</div>
          <div className="flex items-center gap-3">
            <TextField value={type} />
            <HoverIcons icon={EditIcon} iconName={`edit ${type}`} />
            <HoverIcons icon={CopyIcon} iconName={`copy ${type}`} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>{PAGE_HEADINGS.name}</div>
          <div className="flex items-center gap-3">
            <TextField value={name} />
            <HoverIcons icon={EditIcon} iconName={`edit ${name}`} />
            <HoverIcons icon={CopyIcon} iconName={`copy ${name}`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className={PAGE_HEADINGS.style}>{PAGE_HEADINGS.context}</div>
        <div>{context}</div>
      </div>
      <div className="flex flex-col gap-6">
        <div className={PAGE_HEADINGS.style}>{PAGE_HEADINGS.task}</div>
        <div>{task}</div>
      </div>
    </div>
  );
});

export {TicketContent};
