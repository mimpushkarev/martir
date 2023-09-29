import {PropsWithChildren, memo} from 'react';

type FormGroupPropsType = PropsWithChildren<{
  label: JSX.Element | string;
}>;

export const FormGroup = memo<FormGroupPropsType>(function TicketParams({label, children}) {
  return (
    <div className="flex gap-8">
      <div className="min-h-8 flex flex-[0_0_14rem] items-center text-bold">{label}</div>
      <div className="w-0 flex-auto">{children}</div>
    </div>
  );
});
