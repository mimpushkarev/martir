import { Model } from '_utils/hooks/useForm';
import {HTMLAttributes} from 'react';

export type TextAreaFieldPropsType = HTMLAttributes<HTMLTextAreaElement> & {
  name: Model<string>;
};
