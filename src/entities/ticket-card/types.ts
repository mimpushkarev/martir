import {Ticket} from '_shared/api/tracker/ticket-list';

export type TiketCardPropsType = {ticket: Ticket};

export type TicketButtonPropsType = {
  status: string;
  status_change: string;
  isStatusChangeTimeShown?: boolean;
};
