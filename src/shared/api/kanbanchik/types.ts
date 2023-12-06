// Get list of tickets
export type ListTicketRequestType = {
  filter?: string;
  limit: number;
  offset: number;
};
export type ListTicketResponse = Array<Ticket>;

// Get ticket
export type TicketRequestType = {
  task_id: string;
};
export type TicketResponse = Ticket;

// Upsert
export type CreateTicketRequestType = {
  task_id: string;
  author_id: string;
  name: string;
  type: string;
  status_task: 'opened' | 'in-progress' | 'in-review' | 'done';
  executor_id?: string;
  context?: string;
  task?: string;
  planned_sp?: number;
  spent_sp?: number;
  watchers?: string[];
};
export type CreateTicketResponse = Ticket;

// Components
export type Ticket = {
  task_id: string;
  status_task: 'opened' | 'in-progress' | 'in-review' | 'done';
  type: string;
  name: string;
  content: string;
  task: string;
  planned_sp: number;
  spent_sp: number;
  author_id: string;
  executor_id: string;
  watchers?: string[];
  close_at?: string; // в формате "YYYY-MM-DDTHH:mm:ssZ",
  create_at?: string; // в формате "YYYY-MM-DDTHH:mm:ssZ",
  update_at?: string; // в формате "YYYY-MM-DDTHH:mm:ssZ"
};
