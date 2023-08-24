import {PropsWithChildren, memo} from 'react';

type OutlinedCardPropsType = PropsWithChildren<{}>;

const OutlinedCard = memo<OutlinedCardPropsType>(function OutlinedCard({children}) {
  return (
    <div className="rounded-lg border border-common-light-gray p-2 hover:cursor-pointer hover:border-common-white">
      {children}
    </div>
  );
});

export {OutlinedCard};
