import {App} from 'antd';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

import {DEFAULT_TICKET} from './consts';
import {getTicket, getTicketList} from './requests';

const LIMIT_TASKS_PER_PAGE = 100;

// Get list of tickets
const getParams = async (params: {offset: number}) => {
  return await getTicketList({
    limit: LIMIT_TASKS_PER_PAGE,
    offset: params.offset * LIMIT_TASKS_PER_PAGE
  });
};
const getKey = (pageIndex: number, previousPageData: Array<unknown>) => {
  if (previousPageData && !previousPageData.length) return null;
  return {name: 'GET_TICKET_LIST', offset: pageIndex};
};

const swrOptions = {
  revalidateFirstPage: false,
  revalidateOnFocus: false
};

export const useGetTicketList = () => {
  return useSWRInfinite(getKey, getParams, swrOptions);
};

// Get ticket
export const useGetTicket = (id: string) => {
  const {notification} = App.useApp();

  return useSWR(
    {name: 'GET_TICKET', id},
    async ({id: task_id}) => {
      if (!id || task_id === 'create') {
        return {data: DEFAULT_TICKET};
      }

      return await getTicket({task_id}).catch(e => {
        notification.error({message: e.name, description: e.message, placement: 'bottomRight'});
        throw new Error(e);
      });
    },
    swrOptions
  );
};
