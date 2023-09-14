import {FC} from 'react';

type TextFieldPropsType = {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void; // убрать обязательность поля
  disabled?: boolean;
};

export type TextFieldType = FC<TextFieldPropsType>;
