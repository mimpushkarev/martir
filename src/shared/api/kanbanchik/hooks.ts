import {App} from 'antd';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import useSWRMutation from 'swr/mutation';

import {DEFAULT_TICKET} from './consts';
import {getTicket, getTicketList, upsertTicket} from './requests';
import {CreateTicketRequestType} from './types';

const LIMIT_TASKS_PER_PAGE = 100;

// Get list of tickets
const getKey = (pageIndex: number, previousPageData: Array<unknown>) => {
  if (previousPageData && !previousPageData.length) return null;
  return {name: 'GET_TICKET_LIST', offset: pageIndex};
};

const swrOptions = {
  revalidateFirstPage: false,
  revalidateOnFocus: false
};

export const useGetTicketList = () => {
  const {notification} = App.useApp();

  return useSWRInfinite(
    getKey,
    async (params: {offset: number}) => {
      return await getTicketList({
        limit: LIMIT_TASKS_PER_PAGE,
        offset: params.offset * LIMIT_TASKS_PER_PAGE
      }).catch(e => {
        notification.error({message: e.name, description: e.message, placement: 'bottomRight'});
        throw new Error(e);
      });
    },
    swrOptions
  );
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

// Update ticket
export const useMutateTicket = (id: string) => {
  const {notification} = App.useApp();

  return useSWRMutation(
    {name: 'GET_TICKET', id},
    async (_params, {arg}: {arg: CreateTicketRequestType}) =>
      await upsertTicket(arg).catch(e => {
        notification.error({message: e.name, description: e.message, placement: 'bottomRight'});
        throw new Error(e);
      }),
    {
      revalidate: false
    }
  );
};
