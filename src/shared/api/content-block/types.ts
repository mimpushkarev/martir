// Get list of content-blocks

export type GetListOfBlocksRequestType = {
  parent_id?: string; //id секции, если он есть
  limit: number; //количество выдаваемых блоков
  offset: number; //сколько блоков нужно 'отступить' от начала списка
};

export type GetListOfBlocksResponceType = Array<BlockType>;

// Get content-block
export type GetBlockRequestType = {
  block_id: string;
};

export type GetBlockResponceType = Array<BlockType>;

// Upsert content-block
export type CreateBlockRequestType = {
  block_id: string;
  name: string;
  section_id: string;
  content: string;
};
export type GetBlocksResponceType = 'Ok';

// Component
export type BlockType = {
  block_id: string; //id контент-блока
  content: string; //содержимое контент блока
  name: string; //имя контент блока
  section_id: string; //id секции, к которой пренадлежит контент блок
};
