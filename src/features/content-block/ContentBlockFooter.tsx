import {memo, useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';

import {Button} from '_shared/button';
import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockFooterType} from './types';

const ContentBlockFooter = memo<ContentBlockFooterType>(function ContentBlockFooter() {
  const {mergeParams, removeParams, values} = useQuery({mode: value => value, id: value => value});

  const handleSubmit = () => {
    const contentId = uuidv4();
    mergeParams({id: contentId, mode: 'show'});
  };

  const handleCancel = () => {
    removeParams(['mode', 'id']);
  };

  const handleEdit = () => {
    mergeParams({mode: 'edit'});
  };

  const handleCopy = () => {
    mergeParams({mode: 'copy'});
  };

  const handleDelete = () => {
    removeParams(['mode', 'id']);
  };

  const buttonGroup = useMemo(() => {
    switch (values.mode) {
      case 'create':
      case 'edit':
      case 'copy':
        return (
          <div className="flex gap-4">
            <Button theme="primary" type="submit" onClick={handleSubmit}>
              Сохранить
            </Button>
            <Button theme="outlined" onClick={handleCancel}>
              Отменить
            </Button>
          </div>
        );
      case 'show':
        return (
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Button theme="primary" onClick={handleEdit}>
                Редактировать
              </Button>
              <Button theme="outlined" onClick={handleCopy}>
                Копировать
              </Button>
            </div>
            <Button theme="danger" onClick={handleDelete}>
              Удалить
            </Button>
          </div>
        );
    }
  }, [values.mode, handleSubmit, handleCancel, handleEdit, handleCopy, handleDelete]);
  return <div className="px-10 py-4">{buttonGroup}</div>;
});

export {ContentBlockFooter};
