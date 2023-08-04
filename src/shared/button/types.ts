import {MergeElementProps} from '_shared/types';

export type ButtonPropsType = MergeElementProps<
  'button',
  {
    type?:
      | 'primary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'secondary'
      | 'secondary-blue'
      | 'secondary-danger'
      | 'secondary-warning'
      | 'secondary-success';
    state?: 'normal' | 'hover' | 'disabled';
  }
>;
