import axios from 'axios';

export type BlockType = {
  block_id: string; //id контент-блока
  content: string; //содержимое контент блока
  name: string; //имя контент блока
  section_id: string; //id секции, к которой пренадлежит контент блок
};

type GetBlockRequestType = {
  block_id: string;
};

type GetBlockResponceType = Array<BlockType>

type GetContentBlockType = (request: GetBlockRequestType) => Promise<GetBlockResponceType>;

export const getContentBlock: GetContentBlockType = async request => {
  const res = await axios.get(`https://d5d6p1blagmhhrqv3l9i.apigw.yandexcloud.net/content-service/content-block`, {
    params: request
  });
  return res.data;
};
