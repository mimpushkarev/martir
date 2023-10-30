import {PropsWithChildren, memo} from 'react';

import {Container} from '_shared/container';

const SidebarContainer = memo(function SidebarContainer({children}: PropsWithChildren) {
  return (
    <Container px={6} py={3}>
      {children}
    </Container>
  );
});

export {SidebarContainer};
