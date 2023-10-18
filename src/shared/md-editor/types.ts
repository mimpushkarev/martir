import {MDXEditorProps} from '@mdxeditor/editor';

export type MDEditorPropsType = Omit<MDXEditorProps, 'markdown'> & {
  name: string;
  className?: string;
};
