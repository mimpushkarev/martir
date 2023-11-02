import {MDXEditorProps} from '@mdxeditor/editor';

import {Model} from '_utils/hooks/useForm';

export type MDEditorPropsType = Omit<MDXEditorProps, 'markdown'> & {
  name: Model<string>;
  className?: string;
};
