import {HTMLAttributes} from 'react';

import {Model} from '_utils/hooks/useForm';

export type TextAreaFieldPropsType = HTMLAttributes<HTMLTextAreaElement> & {
  name: Model<string>;
};
