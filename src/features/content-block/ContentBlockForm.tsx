import {Form} from 'antd';
import {memo, useCallback, useEffect, useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';

import {BlockType, upsertContentBlock, useGetContentBlock} from '_shared/api/content-block';
import {Copy} from '_shared/copy';
import {Input} from '_shared/input';
import {MDEditor} from '_shared/md-editor';
import {getNamePath} from '_utils/hooks/useForm';
import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockFooter} from './ContentBlockFooter';
import {ContentBlockFormType} from './types';

const formPath = getNamePath<BlockType>();

const INITIAL_VALUE: BlockType = {
  block_id: '',
  content: '',
  name: '',
  section_id: ''
};

const ContentBlockForm = memo<ContentBlockFormType>(function ContentBlockForm({id, mode}) {
  const {data} = useGetContentBlock(id);
  const [form] = Form.useForm();
  const {mergeParams, values} = useQuery({mode: value => value, id: value => value});

  useEffect(() => {
    form.setFieldsValue(data?.[0]);
  }, [form, data]);

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
      upsertContentBlock({
        block_id: blockId,
        name: contentBlock.name,
        section_id: '',
        content: contentBlock.content
      }).then(() => {
        mergeParams({id: blockId, mode: 'show'});
      });
    },
    [mergeParams, values.id]
  );
  return (
    <Form onFinish={handleSubmit} initialValues={INITIAL_VALUE}>
      <div className="flex flex-1 flex-col justify-between divide-y divide-common-dark-gray">
        <div className="flex w-full flex-1 flex-col gap-6 overflow-auto px-10 py-4">
          <p className="text-common-light-gray">{blockTitle}</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="block_name">Название контент-блока</label>
            <Form.Item name={formPath('name')}>
              <Input className="w-2/5" id="block_name" placeholder="Введите название контент-блока" required={true} />
            </Form.Item>
          </div>
          <Form.Item name={formPath('content')}>
            <MDEditor placeholder="Введите текст..." />
          </Form.Item>
        </div>
        <ContentBlockFooter />
      </div>
    </Form>
  );
});

export {ContentBlockForm};
