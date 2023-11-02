import {Form as F} from 'formik';
import {memo, useCallback, useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';

import {createContentBlock} from '_shared/api/content/content-block/post-block';
import {Copy} from '_shared/copy';
import {Input} from '_shared/input';
import {MDEditor} from '_shared/md-editor';
import {useForm} from '_utils/hooks/useForm';
import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockFooter} from './ContentBlockFooter';
import {ContentBlockFormType} from './types';

const INITIAL_VALUE = {
  block_name: '',
  text: ''
};

const BACKEND_VALUE = {
  block_name: 'БАБОЧКИ',
  text: 'ЦВЕТОЧКИ'
};

const ContentBlockForm = memo<ContentBlockFormType>(function ContentBlockForm({id, mode}) {
  const {getName, Form} = useForm(id ? BACKEND_VALUE : INITIAL_VALUE);
  const {mergeParams, values} = useQuery({mode: value => value, id: value => value});

  const blockTitle = useMemo(() => {
    switch (mode) {
      case 'create':
        return 'Создание контент-блока';
      case 'edit':
      case 'copy':
        return <Copy value={id}>ID:{id}</Copy>;
    }
  }, [mode, id]);
  const handleSubmit = useCallback(
    (contentBlock: typeof INITIAL_VALUE) => {
      const blockId = values.id || uuidv4();
      createContentBlock({
        block_id: blockId,
        name: contentBlock.block_name,
        section_id: '',
        content: contentBlock.text
      }).then(() => {
        mergeParams({id: blockId, mode: 'show'});
      });
    },
    [mergeParams, values.id]
  );
  return (
    <Form onSubmit={handleSubmit}>
      <F className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-between divide-y divide-common-dark-gray">
          <div className="flex w-full flex-1 flex-col gap-6 overflow-auto px-10 py-4">
            <p className="text-common-light-gray">{blockTitle}</p>
            <div className="flex flex-col gap-2">
              <label htmlFor="block_name">Название контент-блока</label>
              <Input id="block_name" name={getName('block_name')} placeholder="Введите название контент-блока" />
            </div>
            <MDEditor name={getName('text')} placeholder="Введите текст..." />
          </div>
          <ContentBlockFooter />
        </div>
      </F>
    </Form>
  );
});

export {ContentBlockForm};
