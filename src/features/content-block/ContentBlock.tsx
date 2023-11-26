import {memo, useMemo} from 'react';

import {useQuery} from '_utils/hooks/useQuery';

import {ContentBlockForm} from './ContentBlockForm';
import {ShowContentBlock} from './ShowContentBlock';

const ContentBlock = memo(function ContentBlock() {
  const {values} = useQuery({mode: value => value, id: value => value});

  const content = useMemo(() => {
    switch (values.mode) {
      case 'create':
        return <ContentBlockForm id={undefined} mode={values.mode} />;
      case 'edit':
      case 'copy':
        return <ContentBlockForm id={values.id} mode={values.mode} />;
      case 'show':
        return <ShowContentBlock id={values.id} />;
      default:
        return (
          <div className="px-10 py-4">
            <p className="mb-2 text-header">Создавайте и управляйте контентом</p>
            <p>Создайте блоки для управления контентом во внутренних и сторонних системах</p>
          </div>
        );
    }
  }, [values.mode, values.id]);

  return <div className="flex h-full w-full flex-col">{content}</div>;
});

export {ContentBlock};
