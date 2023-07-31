import {PropsWithChildren} from 'react';

type TableItemPropsType = PropsWithChildren<{
  className?: string;
}>;

type RowPropsType = PropsWithChildren<{
  id?: string;
  data?: object;
  className?: string;
}>;

export type {RowPropsType, TableItemPropsType};
