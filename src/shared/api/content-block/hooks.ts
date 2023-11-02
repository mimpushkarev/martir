import useSWR from 'swr';

import {getContentBlock} from './request';

// Get ticket
export const useGetContentBlock = (id: string) => {
  return useSWR({name: 'GET_CONTENT_BLOCK', id}, async ({id: block_id}) => await getContentBlock({block_id}));
};
