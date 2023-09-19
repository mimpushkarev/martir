import {FC} from 'react';

type TextFieldPropsType = {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void; // убрать обязательность поля
  disabled?: boolean;
  className?: string;
  svg?: string;
};

export type TextFieldType = FC<TextFieldPropsType>;
