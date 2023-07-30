import {HeartIcon as HeartIconOutline} from '@heroicons/react/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/solid';
import {xor} from 'lodash';
import {memo, useCallback, useMemo} from 'react';

import {cn} from '_utils/cn';
import {useLikedList} from '_utils/hooks/useLikedList';

type ToLikedButtonPropsType = {
  entity: string;
};

const ToLikedButton = memo<ToLikedButtonPropsType>(function ToLikedButton({entity}) {
  const [liked, setLiked] = useLikedList();
  const addEntityToLiked = useCallback(() => {
    setLiked(prev => xor(prev, [entity]));
  }, [entity, setLiked]);

  const cartSet = useMemo(() => new Set(liked), [liked]);

  return (
    <div
      onClick={addEntityToLiked}
      className="cursor-pointer select-none bg-common-darkest-gray p-2 duration-200 ease-in-out hover:bg-common-bg"
    >
      <HeartIconSolid
        className={cn('absolute h-6 w-6 duration-200 ease-in-out', {
          'opacity-0': !cartSet.has(entity)
        })}
      />
      <HeartIconOutline className="h-6 w-6" />
    </div>
  );
});

export {ToLikedButton};
