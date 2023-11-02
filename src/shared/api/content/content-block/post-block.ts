import axios from 'axios';

type CreateBlockRequestType = {
  block_id: string;
  name: string;
  section_id: string;
  content: string;
};

type GetBlocksResponceType = string;

type GetContentBlocksType = (request: CreateBlockRequestType) => Promise<GetBlocksResponceType>;

export const createContentBlock: GetContentBlocksType = async request => {
  const res = await axios.post(
    'https://d5d6p1blagmhhrqv3l9i.apigw.yandexcloud.net/content-service/content-block',
    request
  );
  return res.data;
};
