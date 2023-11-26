import {memo, useMemo} from 'react';

import {useGetContentBlock} from '_shared/api/content-block';
import {Copy} from '_shared/copy';

import {ContentBlockFooter} from './ContentBlockFooter';
import {ShowContentBlockType} from './types';

const ShowContentBlock = memo<ShowContentBlockType>(function ShowContentBlock({id}) {
  const {data = []} = useGetContentBlock(id);
  const contentBlockData = useMemo(
    () => ({
      blockId: data[0]?.block_id,
      name: data[0]?.name,
      content: data[0]?.content,
      sectionId: data[0]?.section_id
    }),
    [data]
  );

  return (
    <div className="flex flex-1 flex-col justify-between divide-y divide-common-dark-gray">
      <div className="flex w-full flex-1 flex-col gap-6 overflow-auto px-10 py-4">
        <p className="text-common-gray">
          <Copy value={id}>
            <div className="flex gap-1 text-paragraph text-common-gray">ID: {id}</div>
          </Copy>
        </p>
        <div className="flex flex-wrap text-header">{contentBlockData.name}</div>
        <div className="flex text-paragraph-2">{contentBlockData.content}</div>
      </div>
      <ContentBlockFooter />
    </div>
  );
});

export {ShowContentBlock};
