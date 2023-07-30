type Link = {
  to: string;
  label: string;
  icon?: string;
};

type Group = {
  name: string;
  links: Array<Link>;
};

export type VerticalNavPropsType = {
  groups: Array<Group>;
  className?: string;
};
