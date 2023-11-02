import {AxiosResponse} from 'axios';

import {apiInstance} from '../api';
import {
  CreateTicketRequestType,
  CreateTicketResponse,
  ListTicketRequestType,
  ListTicketResponse,
  TicketRequestType,
  TicketResponse
} from './types';

export const getTicketList = async (request: ListTicketRequestType): Promise<AxiosResponse<ListTicketResponse>> => {
  return apiInstance.get<ListTicketRequestType, AxiosResponse<ListTicketResponse>>('tracker/tasks', {
    params: request
  });
};

export const getTicket = async (request: TicketRequestType): Promise<AxiosResponse<TicketResponse>> => {
  return apiInstance.get<TicketRequestType, AxiosResponse<TicketResponse>>('tracker/task', {
    params: request
  });
};

export const upsertTicket = async (request: CreateTicketRequestType) => {
  return apiInstance.post<CreateTicketRequestType, AxiosResponse<CreateTicketResponse>>('tracker/task', request);
};
