import {
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  Separator,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor';
import {useEffect, useRef} from 'react';

import {cn} from '_utils/cn';

import {BlockTypeSelect} from './BlockTypeSelect';
import {MDEditorPropsType} from './types';

const plugins = [
  headingsPlugin(),
  quotePlugin(),
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

const MDEditor = function MDEditor({className, ...props}: MDEditorPropsType) {
  const ref = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    ref.current?.setMarkdown('value' in props && typeof props.value === 'string' ? props.value : '');
  }, ['value' in props && typeof props.value !== 'undefined']);

  return (
    <MDXEditor
      {...props}
      plugins={plugins}
      className={cn('dark-theme prose prose-stone prose-invert', {[className]: !!className})}
      markdown={'value' in props && typeof props.value === 'string' ? props.value : ''}
      ref={ref}
    />
  );
};

export {MDEditor};
