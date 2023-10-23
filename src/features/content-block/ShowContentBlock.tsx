import {memo} from 'react';

import {Copy} from '_shared/copy';

import {ContentBlockFooter} from './ContentBlockFooter';
import {ShowContentBlockType} from './types';

const BACKEND_VALUE = {
  block_name: 'БАБОЧКИ',
  text: 'ЦВЕТОЧКИ'
};

const ShowContentBlock = memo<ShowContentBlockType>(function ShowContentBlock({id}) {
  return (
    <div className="flex flex-1 flex-col justify-between divide-y divide-common-dark-gray">
      <div className="flex w-full flex-1 flex-col gap-6 overflow-auto px-10 py-4">
        <p className="text-common-light-gray">
          <Copy value={id}>ID:{id}</Copy>
        </p>
        <div className="flex flex-col gap-2">{BACKEND_VALUE.block_name}</div>
        <div>{BACKEND_VALUE.text}</div>
      </div>
      <ContentBlockFooter />
    </div>
  );
});

export {ShowContentBlock};
