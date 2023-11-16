import useSWR from 'swr';

import {getContentBlock} from './request';

const swrOptions = {
  revalidateOnFocus: false
};

// Get ticket
export const useGetContentBlock = (id: string) => {
  return useSWR(
    {name: 'GET_CONTENT_BLOCK', id},
    async ({id: block_id}) => await getContentBlock({block_id}),
    swrOptions
  );
};
