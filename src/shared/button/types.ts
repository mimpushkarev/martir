import {MergeElementProps} from '_shared/types';

export type ButtonPropsType = MergeElementProps<
  'button',
  {
    type?:
      | 'primary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'outlined'
      | 'outlined-primary'
      | 'outlined-danger'
      | 'outlined-warning'
      | 'outlined-success';
    state?: 'normal' | 'hover' | 'disabled';
  }
>;
