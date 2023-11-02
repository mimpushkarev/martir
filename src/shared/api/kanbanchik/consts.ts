import {Ticket} from './types';

export const DEFAULT_TICKET: Ticket = {
  status_task: 'opened',
  type: '',
  name: '',
  content: '',
  task: '',
  author_id: '',
  executor_id: '',
  task_id: '',
  spent_sp: undefined!,
  planned_sp: undefined!
};
