import {Input} from 'antd';
import {TextAreaProps} from 'antd/es/input';
import {useField} from 'formik';
import {memo} from 'react';

import {Model} from '_utils/hooks/useForm';

type TextAreaPropsType = TextAreaProps & {
  name: Model<string>;
};

const TextArea = memo<TextAreaPropsType>(function TextArea({name, className, ...props}) {
  const [field] = useField(name);

  return <Input.TextArea {...field} {...props} autoSize={props.autoSize || {minRows: 4}} />;
});

export {TextArea};
