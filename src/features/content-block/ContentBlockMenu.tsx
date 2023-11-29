import {memo, useCallback} from 'react';

import {BlockType, useGetContentBlocks} from '_shared/api/content-block';
import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockMenuType} from './types';

const ContentBlockMenu = memo<ContentBlockMenuType>(function ContentBlockMenu({limit, offset, parentId}) {
  const {data} = useGetContentBlocks(limit, offset, parentId);
  const {mergeParams} = useQuery({mode: value => value, id: value => value});

  const redirectToContentBlock = useCallback(
    (blockId: string) => () => {
      mergeParams({id: blockId, mode: 'show'});
    },
    [mergeParams]
  );
  return (
    <div className="my-2 flex flex-col gap-1">
      {data?.map((contentBlock: BlockType) => (
        <div
          key={contentBlock.block_id}
          className="cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md px-1 py-2 hover:bg-common-dark-gray"
          onClick={redirectToContentBlock(contentBlock.block_id)}
          title={contentBlock.name}
        >
          {contentBlock.name}
        </div>
      ))}
    </div>
  );
});

export {ContentBlockMenu};
