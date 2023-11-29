import useSWR from 'swr';

import {getContentBlock, getContentBlocks} from './request';

const swrOptions = {
  revalidateOnFocus: false
};

// Get block
export const useGetContentBlock = (id: string) => {
  return useSWR(
    {name: 'GET_CONTENT_BLOCK', id},
    async ({id: block_id}) => await getContentBlock({block_id}),
    swrOptions
  );
};

//Get blocks by parentId
export const useGetContentBlocks = (limit: number, offset: number, parentId?: string) => {
  return useSWR(
    {name: ' GET_CONTENT_BLOCKS', parentId, limit, offset},
    async ({parentId: parent_id, limit: limit, offset: offset}) => await getContentBlocks({parent_id, limit, offset}),
    swrOptions
  );
};
