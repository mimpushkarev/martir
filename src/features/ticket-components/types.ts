type TicketHeaderType = {
  type: string;
  id: string;
};

type TicketContentType = {
  type: string;
  name: string;
  context: string;
  task: string;
};

type HoverIconsType = {
  icon: string;
  iconName: string;
  className?: string;
  onClick?: ()=>void;
}

export type {TicketHeaderType, TicketContentType, HoverIconsType};
