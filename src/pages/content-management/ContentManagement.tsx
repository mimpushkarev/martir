import {memo} from 'react';
import {v4 as uuidv4} from 'uuid';

import {ContentBlock} from '_features/content-block';
import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {useQuery} from '_utils/hooks/useQuery';

const ContentManagement = memo(function ContentManagement() {
  const {mergeParams, values} = useQuery({mode: value => value});

  const handleClick = () => {
    const contentId = uuidv4();
    console.log(contentId);
    mergeParams({mode: 'create'});
  };

  return (
    <Container className="flex h-full w-full divide-x divide-common-dark-gray">
      <div className="h-full w-1/4 p-4">
        <Button theme="primary" state={values.mode === 'create' ? 'disabled' : 'normal'} onClick={handleClick}>
          Создать документ
        </Button>
      </div>
      <ContentBlock />
    </Container>
  );
});

export default ContentManagement;
