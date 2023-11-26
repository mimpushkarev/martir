import {Form} from 'antd';
import {memo} from 'react';

import {Ticket} from '_shared/api/kanbanchik';
import {Input} from '_shared/input';
import {Select} from '_shared/select';
import {getNamePath} from '_utils/hooks/useForm';
import {PERFORMERS_ARRAY} from '_utils/mock';

import {FormGroup} from './FormGroup';
import {LABELS, STATE_OPTIONS} from './consts';

const formPath = getNamePath<Ticket>();

// TODO сделать отдельный компонент UserSelect
function transformArray(arr: {id: string; image: string; name: string}[]) {
  return arr.map(item => ({
    value: item.id,
    label: item.name,
    photo: item.image ?? ''
  }));
}

const transformPerformersToOptions = transformArray(PERFORMERS_ARRAY);

const TicketParams = memo(function TicketParams() {
  return (
    <div className="flex flex-col gap-y-5">
      <FormGroup label={LABELS.STATE}>
        <Form.Item name={formPath('status_task')}>
          <Select options={STATE_OPTIONS} className="w-full" />
        </Form.Item>
      </FormGroup>
      <FormGroup label={LABELS.AUTHOR}>
        <Form.Item name={formPath('author_id')}>
          <Select options={transformPerformersToOptions} className="w-full" />
        </Form.Item>
      </FormGroup>
      <FormGroup label={LABELS.PERFORMER}>
        <Form.Item name={formPath('executor_id')}>
          <Select options={transformPerformersToOptions} className="w-full" />
        </Form.Item>
      </FormGroup>
      <FormGroup label={LABELS.WATCHER}>
        <Form.Item name={formPath('watchers')}>
          <Select options={transformPerformersToOptions} className="w-full" isMulti />
        </Form.Item>
      </FormGroup>
      <FormGroup label={LABELS.SP_RATED}>
        <Form.Item name={formPath('planned_sp')}>
          <Input className="w-full" placeholder="0" />
        </Form.Item>
      </FormGroup>
      <FormGroup label={LABELS.SP_SPENT}>
        <Form.Item name={formPath('spent_sp')}>
          <Input className="w-full" placeholder="0" />
        </Form.Item>
      </FormGroup>
    </div>
  );
});

export {TicketParams};
