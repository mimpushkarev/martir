import {Props} from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

export type SelectPropsType = Omit<Props, 'options' | 'name'> &
  (
    | {
        name: string;
      }
    | {
        name: string[];
        isMulti: true;
      }
  ) & {
    options: OptionType[];
  };
