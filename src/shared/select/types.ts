import {FC} from 'react';

export type OptionType = {
  id: string;
  optionTitle: string;
  photo?: string;
};

type SelectPropsType = {
  options: Array<OptionType>;
};

export type SelectType = FC<SelectPropsType>;
