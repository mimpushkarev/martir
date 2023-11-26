import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor';
import {memo} from 'react';

import {cn} from '_utils/cn';

import {MDEditorPropsType} from './types';

const plugins = [
  headingsPlugin(),
  tablePlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  listsPlugin(),
  thematicBreakPlugin(),
  toolbarPlugin({
    toolbarContents: () => (
      <>
        <UndoRedo />
        <Separator />
        <BlockTypeSelect />
        <Separator />
        <BoldItalicUnderlineToggles />
        <ListsToggle />
        <InsertTable />
        <Separator />
        <CreateLink />
      </>
    )
  })
];

const MDEditor = memo<MDEditorPropsType>(function MDEditor({className, ...props}) {
  return (
    <MDXEditor
      {...props}
      className={cn('dark-theme prose prose-stone prose-invert', {[className]: !!className})}
      markdown={'value' in props && typeof props.value === 'string' ? props.value : ''}
      plugins={plugins}
    />
  );
});

export {MDEditor};
