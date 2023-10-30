import {Model} from '_utils/hooks/useForm';

export type TextFieldPropsType = StatelessTextFieldPropsType & {
  name: Model<string | number>;
};

export type StatelessTextFieldPropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};
