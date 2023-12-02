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
  const addEntityToLiked = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setLiked(prev => xor(prev, [entity]));
    },
    [entity, setLiked]
  );

  const cartSet = useMemo(() => new Set(liked), [liked]);

  return (
    <div
      onClick={addEntityToLiked}
      className="cursor-pointer select-none p-2 hover:fill-danger-normal hover:text-danger-normal"
    >
      <HeartIconSolid
        className={cn('absolute h-6 w-6 duration-200 ease-in-out', {
          'opacity-0': !cartSet.has(entity)
        })}
      />
      <HeartIconOutline className="h-6 w-6 duration-200 ease-in-out" />
    </div>
  );
});

export {ToLikedButton};
