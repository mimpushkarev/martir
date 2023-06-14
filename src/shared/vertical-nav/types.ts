type Link = {
  to: string;
  label: string;
  icon?: string;
};

export type VerticalNavPropsType = {
  label: string;
  links: Array<Link>;
  className?: string;
};
