export type ContentBlockFormType = {id: string | undefined; mode: string};

export type ShowContentBlockType = {id: string | undefined};

export type ContentBlockFooterType = Record<string, never>;

export type ContentBlockMenuType = {parentId?: string; limit: number; offset: number};
