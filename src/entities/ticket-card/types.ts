import {Ticket} from '_shared/api/ticket-list';

type TiketCardPropsType = {ticket: Ticket};

type TicketButtonPropsType = {
  status: string;
  status_change: string;
  isStatusChangeTimeShown?: boolean;
};

export type {TiketCardPropsType, TicketButtonPropsType};
