import {memo} from 'react';

import {Container} from '_shared/container';

const ContentManagement = memo(function ContentManagement() {
  return (
    <Container px={6} className="py-24" width="large">
      <div>Управление контентом проверка</div>
    </Container>
  );
});

export default ContentManagement;
