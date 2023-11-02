import axios from 'axios';

import {BlockType} from './get-block';

type GetBlocksRequestType = {
  parent_id?: string; //id секции, если он есть
  limit: number; //количество выдаваемых блоков
  offset: number; //сколько блоков нужно 'отступить' от начала списка
};

type GetBlocksResponceType = Array<BlockType>;

type GetContentBlocksType = (request: GetBlocksRequestType) => Promise<GetBlocksResponceType>;

export const getContentBlocks: GetContentBlocksType = async request => {
  const res = await axios.get('https://d5d6p1blagmhhrqv3l9i.apigw.yandexcloud.net/content-service/content-blocks', {
    params: request
  });
  return res.data;
};
