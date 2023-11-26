import {memo, useCallback, useMemo} from 'react';

import {Button} from '_shared/button';
import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockFooterType} from './types';

const ContentBlockFooter = memo<ContentBlockFooterType>(function ContentBlockFooter() {
  const {mergeParams, removeParams, values} = useQuery({mode: value => value, id: value => value});

  const handleCancel = useCallback(() => {
    removeParams(['mode', 'id']);
  }, [removeParams]);

  const handleEdit = useCallback(() => {
    mergeParams({mode: 'edit'});
  }, [mergeParams]);

  const handleCopy = useCallback(() => {
    mergeParams({mode: 'copy'});
  }, [mergeParams]);

  const handleDelete = useCallback(() => {
    removeParams(['mode', 'id']);
  }, [removeParams]);

  const buttonGroup = useMemo(() => {
    switch (values.mode) {
      case 'create':
      case 'edit':
      case 'copy':
        return (
          <div className="flex gap-2">
            <Button>Сохранить</Button>
            <Button type="default" onClick={handleCancel}>
              Отменить
            </Button>
          </div>
        );
      case 'show':
        return (
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button onClick={handleEdit}>Редактировать</Button>
              <Button type="default" onClick={handleCopy}>
                Копировать
              </Button>
            </div>
            <Button onClick={handleDelete} danger>
              Удалить
            </Button>
          </div>
        );
    }
  }, [values.mode, handleCancel, handleEdit, handleCopy, handleDelete]);
  return <div className="px-10 py-4">{buttonGroup}</div>;
});

export {ContentBlockFooter};
