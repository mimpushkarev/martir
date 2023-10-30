import {Ticket} from '_shared/api/ticket-list';

export const CREATE_TICKET_DATA: Ticket = {
  id: '',
  created: '',
  status: '',
  status_change: '',
  type: '',
  name: '',
  context: '',
  task: '',
  author: '',
  performer: '',
  watcher: [],
  sp_rated: undefined!,
  sp: undefined!
};
