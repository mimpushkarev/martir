import { Model } from '_utils/hooks/useForm';
import {Props} from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

export type SelectPropsType = Omit<Props, 'options' | 'name'> &
  (
    | {
        name: Model<string>;
      }
    | {
        name: Model<string[]>;
        isMulti: true;
      }
  ) & {
    options: OptionType[];
  };
