import {AxiosResponse} from 'axios';

import {apiInstance} from '../api';
import {
  CreateBlockRequestType,
  GetBlockRequestType,
  GetBlockResponceType,
  GetBlocksResponceType,
  GetListOfBlocksRequestType,
  GetListOfBlocksResponceType
} from './types';

export const getContentBlocks = async (
  request: GetListOfBlocksRequestType
): Promise<AxiosResponse<GetListOfBlocksResponceType>['data']> => {
  const res = await apiInstance.get<GetListOfBlocksRequestType, AxiosResponse<GetListOfBlocksResponceType>>(
    '/content-service/content-blocks',
    {
      params: request
    }
  );
  return res.data;
};

export const getContentBlock = async (
  request: GetBlockRequestType
): Promise<AxiosResponse<GetBlockResponceType>['data']> => {
  const res = await apiInstance.get<GetBlockRequestType, AxiosResponse<GetBlockResponceType>>(
    `/content-service/content-block`,
    {
      params: request
    }
  );
  return res.data;
};

export const upsertContentBlock = async (
  request: CreateBlockRequestType
): Promise<AxiosResponse<GetBlocksResponceType>> => {
  return await apiInstance.post<CreateBlockRequestType, AxiosResponse<GetBlocksResponceType>>(
    '/content-service/content-block',
    request
  );
};
