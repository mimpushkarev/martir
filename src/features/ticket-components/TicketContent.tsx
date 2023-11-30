import {Form} from 'antd';
import {memo, useCallback} from 'react';

import {Ticket} from '_shared/api/kanbanchik';
import {Input} from '_shared/input';
import {MDEditor} from '_shared/md-editor';
import {Select} from '_shared/select';
import {copyToClipboard} from '_utils/copy';
import {getNamePath} from '_utils/hooks/useForm';

import {WithCommonActions} from './WithCommonActions';
import {LABELS, TASK_TYPE_OPTIONS} from './consts';

const formPath = getNamePath<Ticket>();

type TicketContentPropsType = {
  ticket: Ticket;
};

const TicketContent = memo(function TicketContent({ticket}: TicketContentPropsType) {
  const handleCopyType = useCallback(() => copyToClipboard(ticket.type), [ticket.type]);
  const handleCopyName = useCallback(() => copyToClipboard(ticket.name), [ticket.name]);
  const handleCopyContext = useCallback(() => copyToClipboard(ticket.content), [ticket.content]);
  const handleCopyTask = useCallback(() => copyToClipboard(ticket.task), [ticket.task]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div>{LABELS.FORM_TYPE}</div>
          <WithCommonActions onCopy={handleCopyType}>
            <Form.Item name={formPath('type')} className="w-[320px]">
              <Select options={TASK_TYPE_OPTIONS} />
            </Form.Item>
          </WithCommonActions>
        </div>
        <div className="flex flex-col gap-2">
          <div>{LABELS.FORM_NAME}</div>
          <WithCommonActions onCopy={handleCopyName}>
            <Form.Item name={formPath('name')} className="w-[320px]">
              <Input />
            </Form.Item>
          </WithCommonActions>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="items-center" onCopy={handleCopyContext}>
          <div className="text-bold-2">{LABELS.FORM_CONTEXT}</div>
        </WithCommonActions>
        <Form.Item name={formPath('content')}>
          <MDEditor placeholder={LABELS.EMPTY_CONTEXT_PLACEHOLDER} />
        </Form.Item>
      </div>
      <div className="flex flex-col gap-6">
        <WithCommonActions className="items-center" onCopy={handleCopyTask}>
          <div className="text-bold-2">{LABELS.FORM_TASK}</div>
        </WithCommonActions>
        <Form.Item name={formPath('task')}>
          <MDEditor placeholder={LABELS.EMPTY_TASK_PLACEHOLDER} />
        </Form.Item>
      </div>
    </div>
  );
});

export {TicketContent};
